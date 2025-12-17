const mongoose = require("mongoose");

async function urlData(url) {
  return mongoose.connect(url);
}

module.exports = {
  urlData,
};
