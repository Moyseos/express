const Posts = require("../models/posts.js");

const Blog = {
	getAll: function() {
		Posts.findAll();
	},

	add: function(post) {
		return Posts.create({ name: post });
	},

	getOne: function() {
		Posts.findById();
	},
};

module.exports = Blog;
