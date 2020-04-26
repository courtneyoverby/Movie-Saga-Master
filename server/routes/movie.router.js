const express = require("express");
const pool = require("../modules/pool");

// Create route to get data from table.
// Create route to get genre from table.

const router = express.Router();

router.get("/", (req, res) => {
  const queryText = `SELECT *
    FROM movies
    ORDER BY id`;

  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.warn(error);
      res.sendStatus(500);
    });
});

router.get("/genre", (req, res) => {
  const queryText = `SELECT movies.id, array_agg(name)
    AS "movie_genre" FROM movies
    JOIN movie_genre
    ON movie_genre.movies_id = movies.id
    JOIN genres ON movie_genre.movies_id
    GROUP BY movies.id
    ORDER BY movies.id`;

  pool
    .query(queryText)
    .then((response) => {
      console.log(response.rows);
      res.send(response.rows);
    })
    .catch((error) => {
      console.warn(error);
      res.sendStatus(500);
    });
});

router.put(":id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const movieUpdate = req.body;
  console.log(movieUpdate);
  const queryText = `UPDATE movies
  SET title = $1, description = $2
  WHERE id = $3;`;

  pool
    .query(queryText, [movieUpdate.title, movieUpdate.description, id])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.warn(error);
      res.sendStatus(500);
    });
});

module.exports = router;
