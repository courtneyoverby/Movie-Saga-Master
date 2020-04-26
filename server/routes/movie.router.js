const express = require("express");
const pool = require("../modules/pool");

// Create route to get data from table.
// Create route to get genre from table.

const router = express.Router();

router.get("/", (req, res) => {
  const queryText = `SELECT * FROM movies ORDER BY id`;

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

module.exports = router;
