const express = require("express");
const app = express();


app.set("view engine", "ejs");
app.use(express.static("assets"));

app.get("/", function(req, res) {
	console.log("Serving up homepage...");
	res.render("index", {
		title: "Nikolas Moyseos",
		heading: "Welcome To My Website",
		myImage:"/images/myimg.jpg",
	});
});

app.get("/images", function(req, res) {
	console.log("Serving up homepage...");
	res.render("images");
});




app.listen(3000, function() {
	console.log("Your server is available at localhost:3000!");
});
