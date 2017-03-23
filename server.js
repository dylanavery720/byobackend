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
            res.status(404).send(error)
        })
});

app.post('/api/v1/users', function(req, res){
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const email = req.body.email
  const user = {first_name, last_name, email, created_at: new Date}
  database('users').insert(user)
        .then(()=>{
          database('users').select()
          .then((users) => {
            res.status(200).json(users)
        })
        })
      .catch((error) => {
            res.status(404).send(error)
        })
      .catch(function(error) {
            res.status(422).send(error, '422')
        })
});

app.put('/api/v1/users:id', function(req, res){
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const email = req.body.email
  const user = {first_name, last_name, email, updated_at: new Date}
  database('users').where('id', request.body.id).update(user)
        .then(()=>{
          database('users').select()
          .then((users) => {
            res.status(200).json(users)
        })
        })
      .catch((error) => {
            res.status(404).send(error)
        })
      .catch(function(error) {
            res.status(422).send(error, '422')
        })
});

app.get('/api/v1/users/:id', function(req, res){
  database('users').where('id', req.params.id).select()
        .then((users) => {
          res.status(200).json(users)
        })
      .catch(function(error) {
            res.status(404).send(error)
        })
});

app.delete('/api/v1/users/:id', function(req, res){
  database('users').where('id', req.params.id).del()
      .then(()=>{
        database('users').select()
        .then((users) => {
          res.status(200).json(users)
      })
      })
      .catch(function(error) {
            res.status(404).send(error)
        })
});

app.get('/api/v1/artists', function(req, res){
  database('artists').select()
        .then((artists) => {
          res.status(200).json(artists)
        })
        .catch(function(error) {
          res.status(404).send(error)
        })
});

app.get('/api/v1/artists/:id', function(req, res){

  database('artists').where('id', req.params.id).select()
        .then((artists) => {
          res.status(200).json(artists)
        })
      .catch(function(error) {
            res.status(404).send(error)
        })
});

app.delete('/api/v1/artists/:id', function(req, res){
  database('artists').where('id', req.params.id).del()
      .then(()=>{
        database('artists').select()
        .then((artists) => {
          res.status(200).json(artists)
      })
      })
      .catch(function(error) {
            res.status(404).send(error)
        })
});

app.post('/api/v1/artists', function(req, res){
  const name = req.body.name
  const artist = {name, created_at: new Date}
  database('artists').insert(artist)
        .then(()=>{
          database('artists').select()
          .then((artists) => {
            res.status(200).json(artists)
        })
        })
      .catch((error) => {
          res.status(404).send(error)
        })
      .catch(function(error) {
          res.status(422).send(error, '422')
        })
});

app.put('/api/v1/artists:id', function(req, res){
  const name = req.body.name
  const artist = {name, updated_at: new Date}
  database('artists').where('id', request.body.id).update(artist)
        .then(()=>{
          database('artists').select()
          .then((artists) => {
            res.status(200).json(artists)
        })
        })
      .catch((error) => {
          res.status(404).send(error)
        })
      .catch(function(error) {
          res.status(422).send(error, '422')
        })
});

app.get('/api/v1/songs', function(req, res){
  database('songs').select()
        .then((songs) => {
          res.status(200).json(songs)
        })
      .catch(function(error) {
            res.status(404).send(error)
        })
});

app.get('/api/v1/songs/:id', function(req, res){
  database('songs').where('id', req.params.id).select()
        .then((songs) => {
          res.status(200).json(songs)
        })
      .catch(function(error) {
            res.status(404).send(error)
        })
});

app.delete('/api/v1/songs/:id', function(req, res){
  database('songs').where('id', req.params.id).del()
      .then(()=>{
        database('songs').select()
        .then((song) => {
          res.status(200).json(song)
      })
      })
      .catch(function(error) {
            res.status(404).send(error)
        })
});

app.post('/api/v1/songs', function(req, res){
  const id = req.body.id
  const name = req.body.name
  const lyrics = req.body.lyrics
  const artist_id = req.body.artist_id
  const song = {id, name, lyrics, artist_id, created_at: new Date }
  database('songs').insert(song)
        .then(()=>{
          database('songs').select()
          .then((song) => {
            res.status(200).json(song)
        })
        })
      .catch((error) => {
            res.status(404).send(error)
        })
      .catch(function(error) {
            res.status(422).send(error, '422')
        })
});

app.put('/api/v1/songs:id', function(req, res){
  const id = req.body.id
  const name = req.body.name
  const lyrics = req.body.lyrics
  const artist_id = req.body.artist_id
  const song = {id, name, lyrics, artist_id, updated_at: new Date }
  database('songs').where('id', request.body.id).update(song)
        .then(()=>{
          database('songs').select()
          .then((songs) => {
            res.status(200).json(songs)
        })
        })
      .catch((error) => {
            res.status(404).send(error)
        })
      .catch(function(error) {
            res.status(422).send(error, '422')
        })
});


 if(!module.parent) {
   app.listen(3001, () => {
    console.log(`app listening port 3000`);
  });
}
