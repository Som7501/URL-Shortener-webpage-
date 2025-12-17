const express = require("express");

const URL = require("../models/url");

// nanoID
const { nanoid } = require("nanoid");

async function createShortUrl(req, res) {
  const body = req.body;
  if (!body.url) {return res.status(400).json({ error: "url is required.." });}
  const shortID = nanoid(5);
  await URL.create({
    shortId: shortID,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });
  return res.render( "Home", { id: shortID });
}

async function createAnalyticsUrl(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json(
    { totalClicks: result.visitHistory.length, analytics: result.visitHistory }
  );
}
module.exports = {
  createShortUrl,
  createAnalyticsUrl,
};
