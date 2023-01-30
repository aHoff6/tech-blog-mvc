const { Post } = require('../models');

const postData = [
    {
        title: "Post test title 1",
        post_content: "Post content test for post number 1",
        user_id: 3
    },
    {
        title: "Post test title 2",
        post_content: "Post content test for post number 2",
        user_id: 1
    },
    {
        title: "Post test title 3",
        post_content: "Post content test for post number 3",
        user_id: 2

    },
    {
        title: "Post test title 4",
        post_content: "Post content test for post number 4",
        user_id: 5
    },
    {
        title: "Post test title 5",
        post_content: "Post content test for post number 5",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;