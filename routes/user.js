const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { userSignUp, userLogIn } = require("../controllers/user");

router.post("/", userSignUp);
router.post("/login", userLogIn);

module.exports = router;
