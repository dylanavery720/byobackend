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
  response.sendFile(__dirname + '/' + 'index.html')
})

app.get('/api/v1/users', (req, res) => {
  database('users').select()
        .then((users) => {
          res.status(200).json(users)
        })
      .catch((error) => {
        res.status(404).send(error)
      })
});

app.post('/api/v1/users', (req, res) => {
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const email = req.body.email
  const id = req.body.id || null
  const user = { id, first_name, last_name, email, created_at: new Date }
  database('users').insert(user)
        .then(() => {
          database('users').select()
          .then((users) => {
            res.status(200).json(users)
          })
        })
      .catch((error) => {
        res.status(404).send(error)
      })
      .catch((error) => {
        res.status(422).send(error, '422')
      })
});

app.put('/api/v1/users/:id', (req, res) => {
  const first_name = req.body.first_name
  const last_name = req.body.last_name
  const email = req.body.email
  const user = { first_name, last_name, email, updated_at: new Date }
  database('users').where('id', req.body.id).update(user)
        .then(() => {
          database('users').select()
          .then((users) => {
            res.status(200).json(users)
          })
        })
      .catch((error) => {
        res.status(404).send(error)
      })
      .catch((error) => {
        res.status(422).send(error, '422')
      })
});

app.get('/api/v1/users/:id', (req, res) => {
  database('users').where('id', req.params.id).select()
        .then((users) => {
          if (users.length < 1) {
            res.status(404).send({ error: 'User does not exist, sorry its gotta be this wayyyyyyy' })
          } else {
            res.status(200).json(users)
          }
        })
      .catch((error) => {
        res.status(404).send(error)
      })
});

app.delete('/api/v1/users/:id', (req, res) => {
  database('users').where('id', req.params.id).del()
      .then(() => {
        database('users').select()
        .then((users) => {
          res.status(200).json(users)
        })
      })
      .catch((error) => {
        res.status(404).send(error)
      })
});

app.get('/api/v1/artists', (req, res) => {
  const search = req.query.search
  database('artists').select()
        .then((artists) => {
          if (search) {
            const searched = artists.filter((obj) => {
              if (obj.name === search) {
                return obj
              }
            })
            if (searched.length < 1) {
              res.status(404).send({ error: 'no match' })
            } else {
              res.status(200).json(searched)
            }
          }
          else {
            res.status(200).json(artists)
          }
        })
        .catch((error) => {
          res.status(404).send(error)
        })
});

app.get('/api/v1/artists/:id', (req, res) => {
  database('artists').where('id', req.params.id).select()
        .then((artists) => {
          if (artists.length < 1) {
            res.status(404).send({ error: 'Artist does not exist, sorry its gotta be this wayyyyyyy' })
          } else {
            res.status(200).json(artists)
          }
        })
      .catch((error) => {
        res.status(404).send(error)
      })
});

app.delete('/api/v1/artists/:id', (req, res) => {
  database('artists').where('id', req.params.id).del()
      .then(() => {
        database('artists').select()
        .then((artists) => {
          res.status(200).json(artists)
        })
      })
      .catch((error) => {
        res.status(404).send(error)
      })
});

app.post('/api/v1/artists', (req, res) => {
  const name = req.body.name
  const id = req.body.id || null
  const artist = { name, id, created_at: new Date }
  database('artists').insert(artist)
        .then(() => {
          database('artists').select()
          .then((artists) => {
            res.status(200).json(artists)
          })
        })
      .catch((error) => {
        res.status(404).send(error)
      })
      .catch((error) => {
        res.status(422).send(error, '422')
      })
});

app.put('/api/v1/artists/:id', (req, res) => {
  const name = req.body.name
  const artist = { name, updated_at: new Date }
  database('artists').where('id', req.body.id).update(artist)
        .then(() => {
          database('artists').select()
          .then((artists) => {
            res.status(200).json(artists)
          })
        })
      .catch((error) => {
        res.status(404).send(error)
      })
      .catch((error) => {
        res.status(422).send(error, '422')
      })
});

app.get('/api/v1/songs', (req, res) => {
  database('songs').select()
        .then((songs) => {
          res.status(200).json(songs)
        })
      .catch((error) => {
        res.status(404).send(error)
      })
});

app.get('/api/v1/songs/:id', (req, res) => {
  database('songs').where('id', req.params.id).select()
        .then((songs) => {
          if (songs.length < 1) {
            res.status(404).send({ error: 'Song does not exist, sorry its gotta be this wayyyyyyy' })
          }
          res.status(200).json(songs)
        })
      .catch((error) => {
        res.status(404).send(error)
      })
});

app.get('/api/v1/songs/:id/charcount', (req, res) => {
  database('songs').where('id', req.params.id).select()
        .then((songs) => {
          if (songs.length < 1) {
            res.status(404).send({ error: 'Song does not exist, sorry its gotta be this wayyyyyyy' })
          }
          res.status(200).json({ charactercount: songs[0].lyrics.length })
        })
      .catch((error) => {
        res.status(404).send(error)
      })
});

app.delete('/api/v1/songs/:id', (req, res) => {
  database('songs').where('id', req.params.id).del()
      .then(() => {
        database('songs').select()
        .then((song) => {
          res.status(200).json(song)
        })
      })
      .catch((error) => {
        res.status(404).send(error)
      })
});

app.post('/api/v1/songs', (req, res) => {
  const id = req.body.id || null
  const name = req.body.name
  const lyrics = req.body.lyrics
  const artist_id = req.body.artist_id
  const song = { id, name, lyrics, artist_id, created_at: new Date }
  database('songs').insert(song)
        .then(() => {
          database('songs').select()
          .then((songs) => {
            res.status(200).json(songs)
          })
        })
      .catch((error) => {
        res.status(404).send(error)
      })
      .catch((error) => {
        res.status(422).send(error, '422')
      })
});

app.put('/api/v1/songs/:id', (req, res) => {
  const id = req.body.id
  const name = req.body.name
  const lyrics = req.body.lyrics
  const artist_id = req.body.artist_id
  const song = { id, name, lyrics, artist_id, updated_at: new Date }
  database('songs').where('id', req.body.id).update(song)
        .then(() => {
          database('songs').select()
          .then((songs) => {
            res.status(200).json(songs)
          })
        })
      .catch((error) => {
        res.status(404).send(error)
      })
      .catch((error) => {
        res.status(422).send(error, '422')
      })
});


if (!module.parent) {
  app.listen(3001, () => {
    console.log('app listening port 3001');
  });
}

module.exports = app;
