const express = require("express");
const app = express();

//init request
app.get("/", (req, res) => {
  res.send("server is ready");
});

const port = process.env.port || 5003;

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
