const express = require('express')
const crypto = require('crypto')
const bcrypt = require('bcrypt')
const cors = require('cors')
const fetch = require('isomorphic-fetch')
const userRouter = express.Router()
const { Tweet, User, Impression } = require('../../models')
const { UniqueConstraintError } = require('sequelize')

userRouter.use(cors())

function validPasswordCheck (req, res, next) {
    let password = req.body.password

    const requirement = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$")
    if (requirement.test(password)) {
        next()
    } else {
        res.status(422).send('Password does not meet complexity requirement')
    }
}

async function validateCredentials (req, res, next) {
    let userHandle = req.body.handle
    let password = req.body.password

    try {
        user = await User.findOne({
            where: {
                handle: userHandle
            }
        })

        if (!user) throw new Error("Invalid username or password")

        await bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                next()
            } else {
                res.status(400).send("Invalid username or password")
            }

        })
    } catch (error) {
        res.status(400).send(error.message)
    }
}

async function getToken(req, res, next) {
    let handle = req.body.handle

    fetch("http://localhost:3001/api/generateToken",
    {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            identifier: handle
        })
    })
    .then(response => response.json())
    .then(data => {
        req.token = data
        next()
    })
    .catch(err => {throw new Error})
}

async function validateToken (req, res, next) {
    const token = req.body.token

    const response = await fetch('http://localhost:3001/api/authenticateToken', {
        method: "GET",
        headers: {
            'authorization': `Basic ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    const data = await response.text()
    req.auth = data
    next()
}

userRouter.post('/signup', validPasswordCheck, async (req, res) => {
    try {
        let password = req.body.password

        let userCheck = await User.findOne({where: { handle: req.body.handle}})

        if (userCheck) throw new Error("User with that handle already exists!")

        bcrypt.hash(password, 9, (err, hash) => {

            if (err) throw new Error(err)

            User.create({
                handle: req.body.handle,
                username: req.body.username,
                password: hash,
                pfp: req.body.pfp
            })
            .then(
                res.status(200).send("User successfully created")
            )
            .catch(
                err => {throw new Error(err)}
            )

        })
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

userRouter.post('/login', validateCredentials, getToken, (req, res) => {
    res.status(200).send(req.token)
})

userRouter.post('/validateToken', validateToken, (req, res) => {
    const authenticated = req.auth
    res.status(200).send(authenticated)
})

module.exports = userRouter
