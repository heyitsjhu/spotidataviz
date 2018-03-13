const express = require('express');
const Spotify = require('node-spotify-api');
const router = express.Router();

var spotify = new Spotify({
  id: process.env.SPOTIFY_CLIENT_ID,
  secret: process.env.SPOTIFY_SECRET_KEY
});

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/results', (req, res) => {
  // console.log(req.query); // check what the current query inputs are
  spotify
    .search({ type: 'track', query: req.query.q })
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
});

module.exports = router;