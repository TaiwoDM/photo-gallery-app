const { timeLog } = require("console");
const fs = require("fs");
const path = require("path");

const AppDirectory = require("../utils/path");
const p = path.join( AppDirectory, "data", "product.json");

module.exports = class Blog {
    constructor(title, image, contents, dateTime) {
        this.title = title;
        this.image = image;
        this.contents = contents;
        this.dateTime = dateTime;
    }
}