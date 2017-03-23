const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (request, response) => {
  response.sendFile( __dirname + "/" + "index.html" )
})

app.get('/api/v1/users', function(req, res){
  database('users').select()
        .then((users) => {
          res.status(200).json(users)
        })
      .catch(function(error) {
            console.error('somethings wrong with db')
        })
});

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

app.get('/api/v1/songs', function(req, res){
  database('songs').select()
        .then((songs) => {
          res.status(200).json(songs)
        })
      .catch(function(error) {
            console.error('somethings wrong with db')
        })
});

app.post('/api/v1/songs', function(req, res){
  nm(req.body.query)
  setTimeout(() => {
  console.log(payload)
  const name = req.body.query
  const lyrics = payload
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
      }, 20000)


});



app.listen(3001, () => {
    console.log(`app listening port 3000`);
  });
