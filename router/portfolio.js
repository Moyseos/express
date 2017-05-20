const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
	console.log("Serving up homepage...");
	res.render("template", {
		page: "index",
		pageArg: { myImage:"/images/myimg.jpg" },
	});
});




router.get("/about", function(reg, res) {
	console.log("Serving up homepage...");
	res.render("template", {
		page: "about",
	  pageArg: null,
	});
});

router.get("/contact", function(reg, res) {
	console.log("Serving up homepage...");
	res.render("template", {
		page: "contact",
	  pageArg: null,
	});
});



module.exports = router;
