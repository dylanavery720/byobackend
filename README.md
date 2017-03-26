# BYOBackend

## A Song Lyric Database

## Overview
 This server is built on express, and connects to  Postgres using knex middleware. Most of the data was scraped from Genius.com using our <code>nightmare.js</code> scraper. This scraper also takes the lyrics that it scrapes and pastes them into a minifier located at http://www.willpeavy.com/minifier/ so that they are ready to be added to the database with no hidden characters to get in the way. This block of minified text should also be good for running them through sentiment analysis. Endpoints are tested using Mocha Chai. We have three tables, one for users, one for artists, and one for songs. Songs belong to artists.

## End Points
<!-- you can check out the following endpoints on [heroku](https://byob-dan1.herokuapp.com/) -->
*****
### Main

<code>GET</code>/

* Provides a link to this README.

### Users

<code>GET</code>/api/v1/users

* Provides a list of all users.

<code>POST</code>/api/v1/users

* Requires 'first_name', 'last_name', and 'email' parameters.

<code>GET</code>/api/v1/users/:id

* Returns from database the user specific to the id in the parameter.

<code>PUT</code>/api/v1/users/:id

* Requires 'first_name', 'last_name', and 'email' parameters. Updates user.

<code>DELETE</code>/api/v1/users/:id

* Remove from database the specific user as selected by the id parameter.

### Artists

<code>GET</code>/api/v1/artists

* Provides a list of all artists.

<code>GET</code>/api/v1/artists?search=Drake

* Returns from the database a specific artist by name.

<code>POST</code>/api/v1/artists

* Requires a 'name'.

<code>GET</code>/api/v1/artists/:id

* Returns from database the artists specific to the id in the parameter.

<code>PUT</code>/api/v1/artists/:id

* Requires a 'name'. Updates artist.

<code>DELETE</code>/api/v1/artists/:id

* Remove from database the specific user as selected by the id parameter.

***

### Songs

<code>GET</code>/api/v1/songs

* Provides a list of all songs.

<code>POST</code>/api/v1/songs

* Requires 'name' and 'lyrics'.

<code>GET</code>/api/v1/songs/:id

* Returns from database the song specific to the id in the parameter.

<code>PUT</code>/api/v1/songs/:id

* Requires 'name' and 'lyrics'. Updates song.

<code>DELETE</code>/api/v1/songs/:id

* Removes from database the specific user as selected by the id parameter.

<code>GET</code>/api/v1/songs/:id/charcount

* In case you want to make sure there isn't a bias taking place with regards to text length, this will return the length of the text of the lyrics you are specifying by id in the parameter.


<!-- ![passing-tests-screenshot](http://i.imgur.com/c7lZroW.png)

*cannot confirm or deny -->
