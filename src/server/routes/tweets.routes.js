const e = require('express')
const express = require('express')
const tweetsRouter = express.Router()
const { Tweet, User, Impression } = require('../../models')

async function validateToken (req, res, next) {
    const authHeader = req.headers['authorization']

    const token = authHeader && authHeader.split(' ')[1]
    if (token === null) return res.sendStatus(401)

    const response = await fetch('http://localhost:3001/api/authenticateToken', {
        method: "GET",
        headers: {
            'authorization': `Bearer ${token}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })

    const data = await response.json()


    req.auth = data

    if (req.auth.authenticated == true) {
        next()
    } else {
        res.status(400).send("ERROR: User not authenticated!")
    }

}


function validateTweet (req, res, next) {
    const tweetBody = req.body.content

    if (tweetBody.length <= 240) {
        next()
    } else {
        res.status(400).send("Tweet content above 240 characters")
    }
}



tweetsRouter.post('/new', validateToken, validateTweet, async (req, res) => {

    // req.auth = { handle: "USERHANDLE", authenticated: true/false }

    const user = await User.findOne({
        where: {
            handle: req.auth.handle
        }
    })

    const tweet = await Tweet.create({
        content: req.body.content,
    })

    tweet2 = await tweet.setUser(user)

    res.send(tweet2)
})

tweetsRouter.post('/like', validateToken, async (req, res) => {
    const tweetId = req.body.id
    const change = req.body.change

    if (Math.abs(change) > 1) {
        res.status(400).send("Cannot like multiple times")
    }

    const tweet = await Tweet.findByPk(tweetId)

    if (tweet) {
        await tweet.increment('likeCount', { by: change })
        res.sendStatus(200)
    } else {
        res.status(404).send("No such tweet")
    }
})

tweetsRouter.get('/tweet/:id', async (req, res) => {
    const id = req.params.id

    try {
        const tweet = await Tweet.findByPk(id)

        if (tweet) {
            const author = await tweet.getUser()
            console.log(author)
            if (author) {
                res.json([tweet, author])
            } else {
                throw new Error("Tweet author does not exist")
            }
        } else {
            res.status(404).json("Could not find tweet!")
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

tweetsRouter.get('/home', validateToken, async (req, res) => {
    const tweets = await Tweet.findAll({order: [['createdAt', 'DESC']]})
    const authors = []

    for (tweet of tweets) {
        const author = await tweet.getUser()
        authors.push(author)
    }
    res.status(200).json([tweets, authors])
})


tweetsRouter.get('/by/:handle', async (req, res) => {

    const user = await User.findOne({
        where: {
            handle: req.params.handle
        }
    })

    if (user) {
        const tweets = await Tweet.findAll({
            where: {
                UserId: user.id
            }
        })
        console.log(tweets)
        res.status(200).json(tweets)
    }

    res.status(404).send("User does not exist")

})



module.exports = tweetsRouter
