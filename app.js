const express = require("express");
const path = require("path");

const app = express();


app.use(express.static(__dirname + "/public")); 
app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res, next) => {
    res.render("public/index");
});


let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("app has started");
});