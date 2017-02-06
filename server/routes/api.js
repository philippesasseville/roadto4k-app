const express = require('express');
const router = express.Router();

//mongoose
var mongoose = require('mongoose');
var Notes = mongoose.model('Notes');

const Dota2Api = require('dota2-api');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

//load env variables
const dotaApiKey = process.env.DOTA_API_KEY;
const accountId = process.env.STEAM_ACCOUNT_ID;
const accountId32 = process.env.STEAM_ACCOUNT_ID32;
const steamid3 = process.env.STEAM_ID3;

const dota = Dota2Api.create(dotaApiKey,570);

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(`${API}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

//gets the 5 most recent matches
router.get('/matches', (req, res) => {
	dota.getMatchHistory({account_id : accountId, matches_requested : "5"}).then((matchHistory) => {
		res.status(200).json(matchHistory.result.matches);
	}, (errorResponseStatusText) => {
		res.status(500).send(errorResponseStatusText);
	});
});

//gets the detail of the match by match_id
router.get('/match/:match_id', (req, res) => {
  id = req.params.match_id.substr(1);
  dota.getMatchDetails({match_id : id}).then((details) => {
    player_won = true;
    details.result.players.forEach((player) => {

      if( player.account_id == steamid3 && player.player_slot >= 128 && details.result.radiant_win){
        player_won = false;
      }
    });
    res.status(200).json({player_won : player_won, radiant_score : details.result.radiant_score, dire_score : details.result.dire_score });
  }, (errorResponseStatusText) => {
    res.status(500).send(errorResponseStatusText);
  });
});

router.post('/notes', (req, res) => {
  //upsert in bd to matain 1 to 1 relationship between matches and notes
  var query = {'match_id':req.body.notes.match_id};
  Notes.findOneAndUpdate(query, req.body.notes, {upsert:true}, function(err, doc){
      if (err) return res.send(500, { error: err });
      return res.status(200);
  });

});

router.get('/notes/:match_id', (req, res) => {
  var filter = { match_id : req.params.match_id.substr(1) };
  var fields = {};
  var options = {};
  Notes.findOne(filter, fields, options, function(err, result) {
      if (err) return res.send(500, { error: err });
      res.status(200).send(result);
  });
});

module.exports = router;