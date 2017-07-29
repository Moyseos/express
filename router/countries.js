const express = require("express");
const router = express.Router();
const countries = require("../json/countries-info.json");

router.get("/countries", function(req, res) {
	res.render("template", {
		page: "countries",
		pageArg: { country: countries.CYP },
	});
});

router.get("/countries/:code", function(req, res) {
	const code = req.params.code.toUpperCase();


	if (!countries[code]) {
		res.status(400);
		res.render("This is not a country!");
		return;
	}

	res.render("template", {
		page: "countries",
		pageArg: { country: countries[code] } ,
	});
});

module.exports = router;
