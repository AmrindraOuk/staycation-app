const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5177",
  })
);

app.get("/test", (req, res) => {
  res.json("Testing ok");
});

app.listen(4000);