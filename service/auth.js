const jwt = require("jsonwebtoken");
const secret = "Nik777";

function setUser(user) {
  if (!user) return null;
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret,
    { expiresIn: "1h" }
  );
}
function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, secret);
}
module.exports = {
  setUser,
  getUser,
};
