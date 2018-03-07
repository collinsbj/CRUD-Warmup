const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const queries = require("./queries");

app.use(cors());
app.use(bodyParser.json());

app.get("/", (request, response) => {
  queries
    .list()
    .then(db => {
      response.json({ db });
    })
    .catch(console.error);
});

app.post("/", (req, res) => {
  res.json("POST worked!");
});

app.listen(process.env.PORT || 3000);
