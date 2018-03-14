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
  console.log(req.query); // check what the current query inputs are
  let endpoint = req.query.t === 'search' ? 'search?limit=20&type=track&q=' : req.query.t +'/';
  let query = req.query.q;

  spotify
    .request(`https://api.spotify.com/v1/${endpoint}${query}`)
    .then(function(data) {
      res.status(200).json(data);
    })
    .catch(function(err) {
      res.status(500).json(err);
    });
});

module.exports = router;