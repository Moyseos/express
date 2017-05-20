const express = require("express");
const router = express.Router();




router.get("/images", function(req, res) {
	console.log("Serving up homepage...");
	res.render("template", { page: "images", pageArg: null });
});


module.exports = router;
