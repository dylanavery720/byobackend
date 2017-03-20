const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: true });

// nightmare
//   .goto('https://www.genius.com')
//   .type('#search_form_input_homepage', 'github nightmare')
//   .click('#search_button_homepage')
//   .wait('#zero_click_wrapper .c-info__title a')
//   .evaluate(function () {
//     return document.querySelector('#zero_click_wrapper .c-info__title a').href;
//   })
//   .end()
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.error('Search failed:', error);
//   });

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile( __dirname + "/" + "index.html" )
})

app.get('/api/v1/artists', function(req, res){
  database('artists').select()
        .then((artists) => {
          res.status(200).json(artists)
        })
      .catch(function(error) {
            console.error('somethings wrong with db')
        })
});

app.post('/api/v1/artists', function(req, res){
  const name = req.body.name
  database('artists').insert(artist)
        .then(()=>{
          database('artists').select()
          .then((artists) => {
            res.status(200).json(artists)
        })
        })
      .catch((error) => {
            console.error('somethings wrong with db')
        })
});

app.post('/api/v1/songs', function(req, res){
  console.log(req.body)
  const name = req.body.name
  const lyrics = req.body.lyrics
  const song = { name, lyrics, created_at: new Date }
  database('songs').insert(song)
        .then(()=>{
          database('songs').select()
          .then((song) => {
            res.status(200).json(song)
        })
        })
      .catch((error) => {
            console.error('somethings wrong with db')
        })
});

app.get('/api/v1/songs', function(req, res){
  database('songs').select()
        .then((songs) => {
          res.status(200).json(songs)
        })
      .catch(function(error) {
            console.error('somethings wrong with db')
        })
});

app.listen(3000, () => {
    console.log(`app listening port 3000`);
  });
