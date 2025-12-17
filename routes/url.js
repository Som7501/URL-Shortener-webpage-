const express = require("express");

const { createShortUrl, createAnalyticsUrl } = require("../controllers/url");

const router = express.Router();

router.post("/", createShortUrl);

router.get("/analytics/:shortId", createAnalyticsUrl);

module.exports = router;
