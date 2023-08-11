const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

Comment.hasMany(Post, {
  foreignKey: 'comment_id',
});

Post.belongsTo(Comment, {
  foreignKey: 'comment_id',
});

module.exports = { User, Comment, Post };
