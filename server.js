const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Successfully Running Express Server");
});

require("./PuppeteerScript.js");

app.listen(3000, () => console.log("Server Running On PORT 3000"));
