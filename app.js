const express = require("express");
const portfolioRouter = require("./router/portfolio");
const countriesRouter = require("./router/countries");
const galleryRouder = require("./router/gallery");
const app = express();



app.set("view engine", "ejs");
app.use(express.static("assets"));
console.log(portfolioRouter);
app.use("/", portfolioRouter);
app.use("/", countriesRouter);
app.use("/", galleryRouder);



app.get("*", function(reg, res) {
	res.status(404);
	res.send("This is not a valid page, Get out!");
});

app.listen(3000, function() {
	console.log("Your server is available at localhost:3000!");
});
