const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res){
  database('artists').select()
        .then((artists) => {
          res.status(200).json(artists)
        })
      .catch(function(error) {
            console.error('somethings wrong with db')
        })
});

app.listen(3000);
