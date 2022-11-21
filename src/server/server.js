const express = require('express')
const server = express()
const cors = require('cors')
const { Tweet, User, Impression } = require('../models')
const tweetsRouter = require('./routes/tweets.routes')
const userRouter = require('./routes/user.routes')

server.use(cors())
server.use(express.json())

server.use('/tweets', tweetsRouter)
server.use('/users', userRouter)

/* USER

handle: "EveDeraedt",
username: "Eve Deraedt",
pfp: null,
verified: false,
followingCount: 487,
followerCount: 43,

*/





server.listen(5001, () => console.log("Listening on port 5001"))
