const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../data/scorers.json'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    const players = JSON.parse(data);
    res.json(players);
  });
});

module.exports = router;
