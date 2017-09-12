require("dotenv").config();
const express = require("express");
const sql = require("./util/sql");
const BodyParser = require('body-parser');
const aboutmeRouter = require("./router/aboutme");
const countriesRouter = require("./router/countries");
const galleryRouder = require("./router/gallery");
const blogRouter = require("./router/blog");
const app = express();

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());

app.set("view engine", "ejs");
app.use(express.static("assets"));
// console.log(aboutmeRouter);
app.use("/", aboutmeRouter);
app.use("/", countriesRouter);
app.use("/", galleryRouder);
app.use("/", blogRouter);



app.get("*", function(reg, res) {
	res.status(404);
	res.send("This is not a valid page, Get out!");
});

sql.sync().then(function() {
	console.log("Database initialized!");
	const port = process.env.PORT || 3000;
	app.listen(port, function() {
		console.log("Your server is available at http://localhost:" + port);
	});
});
