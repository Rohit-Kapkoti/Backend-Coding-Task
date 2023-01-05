const router = require("express").Router();
const db = require("../config");

// get all movies
router.get("/getall", (req, resp) => {
  db.query("SELECT * FROM movies", (err, result) => {
    if (err) {
      resp.send("error");
    } else {
      resp.send(result);
    }
  });
});

// get longest duration movies
router.get("/longest-duration-movies", (req, resp) => {
  db.query(
    "SELECT tconst, primaryTitle, runtimeMinutes, titleType, genres FROM movies ORDER BY runtimeMinutes DESC LIMIT 10",
    (err, result) => {
      if (err) {
        resp.send(err);
      } else {
        resp.send(result);
      }
    }
  );
});

//   post new movie
router.post("/new-movie", (req, resp) => {
  const tconst = req.body.tconst;
  const primaryTitle = req.body.primaryTitle;
  const titleType = req.body.titleType;
  const runtimeMinutes = req.body.runtimeMinutes;
  const genres = req.body.genres;
  db.query(
    "insert into movies values(?,?,?,?,?)",
    [tconst, titleType, primaryTitle, runtimeMinutes, genres],
    (err, result) => {
      if (err) {
        resp.send(err);
      } else {
        resp.send("success");
      }
    }
  );
});

// Get movies with Average Rating is greater than 6
router.get("/top-rated-movies", (req, resp) => {
  db.query(
    "SELECT ratings.tconst, ratings.averageRating, movies.primaryTitle, movies.genres FROM ratings ,movies WHERE  ratings.averageRating > '6' ORDER BY averageRating DESC",
    (err, result) => {
      if (err) {
        resp.send(err);
      } else {
        resp.send(result);
      }
    }
  );
});

router.get("/top", (req, resp) => {
  db.query("SELECT DISTINCT genres, count(*) AS genres FROM movies GROUP BY genres",
    (err, result) => {
      if (err) {
        resp.send(err);
      } else {
        resp.send(result);
      }
    }
  );
});

"select genres from movies "


module.exports = router;
