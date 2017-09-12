const express = require("express");
const router = express.Router();
const Post = require("../models/posts");
console.log(Post);


router.get("/blog", function(req, res, posts) {
	Post.findAll().then(function(posts) {
		res.render("template", {
			page: "blog",
			pageArg: { posts: posts },
		});
	});
});


router.post("/blogform", function(req, res) {
	if (req.body.title === "") {
		res.redirect("/blogform");
		return;
	}
	else if (req.body.article === "") {
		res.redirect("/blogform");
		return;
	}
	Post.create({
		title: req.body.title,
		article: req.body.article,
	})
		.then(function() {
			res.redirect("/blog");
		})
		.catch(function(err) {
			console.log(err);
		});
});

router.get("/blogform", function(req, res) {
	res.render("template", {
		page: "blogform",
		pageArg: {
			title: req.body.title,
			article: req.body.article,
		},
	});
});

module.exports = router;
