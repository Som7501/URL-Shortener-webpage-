const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const port = 8001;
const app = express();

const { restrictToLoggedinUserOnly , checkAuth} = require("./middleware/auth");
const { urlData } = require("./connection");
const staticRoute = require("./routes/staticRouter");

const URL = require("./models/url");
const urlRoute = require("./routes/url");
const userRoute = require("./routes/user");

urlData("mongodb://127.0.0.1:27017/url-shortner").then(() =>
  console.log("MongoDB connedted..")
);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/",checkAuth, staticRoute);
app.use("/user", userRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    { shortId },
    {
      $push: {
        visitHistory: { timestamps: Date.now() },
      },
    }
  );
  res.redirect(entry.redirectUrl);
});
app.listen(port, () => console.log(`Server is listening at ${port}`));
