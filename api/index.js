const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./userRouter");
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api", userRouter);

// app.use("/", (req, res) => {
//   res.send("Hi");
// });

app.listen(5000, () => {
  console.log("localhost connected successfully on port 5000");
});

//db connection

mongoose.connect(
  "mongodb://localhost:27017/userAuth",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log("Database not connected");
    } else {
      console.log("Database connected successfully");
    }
  }
);
