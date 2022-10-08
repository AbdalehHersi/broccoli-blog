const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

// a post has many comments
Post.hasMany(Comment, {
    foreignKey: "post_id",
    onDelete: "CASCADE",
})

// commment belongs to User
Comment.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
})

module.exports = {
    User, 
    Post,
    Comment
};