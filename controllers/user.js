const User = require("../models/user");
const {setUser, getUser}=require("../service/auth");
const {v4:uuidv4} = require("uuid");

async function userSignUp(req, res) {
  const { username, email, password } = req.body;
  await User.create({ username, email, password });
  return res.redirect("/login");
}
async function userLogIn(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    return res.render("login", { error: "Invalid Credentials" });
  }
  const token= setUser(user);
  res.cookie("uid", token);
  return res.redirect("/");
}
module.exports = {
  userSignUp,
  userLogIn,
};
