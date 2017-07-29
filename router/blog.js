const express = require("express");
const router = express.Router();


router.get("/", function(reg, res) {
	res.render("template", {
		page: "blog",
	  pageArg: null,
	});
});

router.post("/blogform", function(reg, res) {
	res.render("template", {
		page: "blogform",
		pageArg: null,
	});
});

module.exports = router;
