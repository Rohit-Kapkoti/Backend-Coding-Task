const express = require("express");
const db = require("./config");
const app = express();
app.use(express.json());
const movieRoute = require("./routes/movies")

app.use("/api/v1",movieRoute);

app.listen("3000", () => {
  console.log("server is started on 3000");
});
