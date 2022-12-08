const Impression = require('./impression.model')
const User = require('./user.model')
const Tweet = require('./tweet.model')
const Like = require('./like.model')


Tweet.belongsTo(User);
User.hasMany(Tweet);

Like.belongsTo(User)
User.hasMany(Like)

Like.belongsTo(Tweet)
Tweet.hasMany(Like)

Impression.belongsTo(User);
User.hasMany(Impression);


Impression.belongsTo(Tweet);
Tweet.hasMany(Impression);


module.exports = { Like, Tweet, User, Impression }
