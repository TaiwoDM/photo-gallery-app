const express = require("express");

const router = express.Router();

const controller = require("../controllers/public");

router.get("/", controller.index);
router.get("/blog", controller.blog);

module.exports = router;



