import express from "express";
import sources from "./sources.js";

const app = express();

//init request
app.get("/", (req, res) => {
  res.send("server is ready");
});

//return products
app.get("/api/sources", (req, res) => {
  res.send(sources);
});

const port = process.env.port || 5003;

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
