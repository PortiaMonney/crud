const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const postRouter = require("./routes/posts.router");

const app = express();

app.use(express.json());

const start = async () => {
  await dbConnect();
};
app.use("/", postRouter);

app.listen(4000, () => {
  console.log("❤ server up and running");
});

start();
