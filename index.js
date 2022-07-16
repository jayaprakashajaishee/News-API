import express from "express";
import sources from "./sources.js";
import news from "./news.js";
import cors from "cors";

const app = express();
app.use(cors());

//init request
app.get("/", (req, res) => {
  res.send("server is ready");
});

//return products
app.get("/api/sources", (req, res) => {
  res.send(sources);
});

//return product based on id
app.get("/api/everything", (req, res) => {
  let articles = [];

  //check if the param is properly populated
  if (req.query.sources) {
    let sourcesParam = req.query.sources;
    let sources = sourcesParam.split(",");

    sources.forEach((source) => {
      let articlesBySource = news.articles.filter((article) => {
        return article.source.id == source;
      });

      articles.push(...articlesBySource);
    });
  }

  console.log(sources);
  res.send({ articles });
});

const port = process.env.port || 5003;

app.listen(port, () => {
  console.log(`server listening at http://localhost:${port}`);
});
