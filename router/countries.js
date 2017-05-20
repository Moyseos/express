const express = require("express");
const router = express.Router();
const countries = require("../json/countries-info.json");

router.get("/countries/:code", function(reg, res) {
	console.log("Serving up homepage...");
	const code = reg.params.code;

	if (!code) {
		res.status(404);
		return res.sent("This is not a country!");
	}

	res.render("template", {
		page: "countries",
		pageArg: { country:countries[code] },
	});
});

module.exports = router;
