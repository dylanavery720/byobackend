process.env.NODE_ENV = 'test';

const configuration = require('../knexfile')['test'];
const database = require('knex')(configuration);
const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../server.js');


chai.use(chaiHttp);

describe('Server', () => {
  beforeEach(function(done) {
  database.migrate.rollback()
  .then(function() {
    database.migrate.latest()
    .then(function() {
      return database.seed.run()
      .then(function() {
        done();
      });
    });
  });
});
  it('should exist', () => {
    expect(app).to.exist;
  });

  describe('GET /', function() {
    it('should return a 200 and html', function(done) {
      chai.request(app)
      .get('/')
      .end(function(err, res) {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        done();
      });
    });
  });

  //ARTISTS TEST

    describe('GET /api/v1/artists', function() {
      it('should return all artists', function(done) {
        chai.request(app)
        .get('/api/v1/artists')
        .end(function(err, res) {
          if (err) { done(err); }
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body.length).to.equal(30);
          expect(res.body[0]).to.have.property('name');
          done();
        });
      });
    });

    describe('POST /api/v1/artists', function() {
      it('should add a new artist', function(done) {
        chai.request(app)
        .post('/api/v1/artists')
        .send({
          name: 'Muddy Waters',
          id: 31
        })
        .end(function(err, res) {
          if (err) { done(err); }
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body.length).to.equal(31);
          expect(res.body[30].name).to.equal('Muddy Waters');
          expect(res.body[30].id).to.equal(31);
          done();
        });
      });
    });

    describe('GET /api/artists/:id', function() {
      context('if artist is found', function(){
        it('should return a specific artist', function(done) {
          chai.request(app)
          .get('/api/v1/artists/2')
          .end(function(err, res) {
            if (err) { done(err); }
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body[0].name).to.equal('Kanye West');
            done();
          });
        });
      });

      context('if no artist is found', function(){
        it('should return a 404', function(done) {
          chai.request(app)
          .get('/api/v1/artists/378')
          .end(function(err, res) {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
        });
      });
    });

    describe('DELETE /api/artists/:id', function() {
      context('if artist is found', function(){
        it('should delete a specific artist', function(done) {
          chai.request(app)
          .delete('/api/v1/artists/2')
          .end(function(err, res) {
            if (err) { done(err); }
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body.length).to.equal(29);
            done();
          });
        });
      });

      context('if no artist is found', function(){
        it('should return a 404', function(done) {
          chai.request(app)
          .get('/api/v1/fartists/378')
          .end(function(err, res) {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
        });
      });
    });

    //USERS TESTS

    describe('GET /api/v1/users', function() {
      it('should return all users', function(done) {
        chai.request(app)
        .get('/api/v1/users')
        .end(function(err, res) {
          if (err) { done(err); }
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body.length).to.equal(30);
          expect(res.body[0]).to.have.property('first_name');
          done();
        });
      });
    });

    describe('POST /api/v1/users', function() {
      it('should add a new user', function(done) {
        chai.request(app)
        .post('/api/v1/users')
        .send({
          first_name: 'Buddy',
          last_name: 'Bottomers',
          email: 'buddybottomers@gmail.com',
          id: 31
        })
        .end(function(err, res) {
          if (err) { done(err); }
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body.length).to.equal(31);
          expect(res.body[30].first_name).to.equal('Buddy');
          expect(res.body[30].last_name).to.equal('Bottomers');
          expect(res.body[30].email).to.equal('buddybottomers@gmail.com');
          expect(res.body[30].id).to.equal(31);
          done();
        });
      });
    });

    describe('GET /api/users/:id', function() {
      context('if user is found', function(){
        it('should return a specific user', function(done) {
          chai.request(app)
          .get('/api/v1/users/2')
          .end(function(err, res) {
            if (err) { done(err); }
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body[0].first_name).to.equal('Raymond');
            done();
          });
        });
      });

      context('if no user is found', function(){
        it('should return a 404', function(done) {
          chai.request(app)
          .get('/api/v1/users/378')
          .end(function(err, res) {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
        });
      });
    });

    describe('DELETE /api/users/:id', function() {
      context('if user is found', function(){
        it('should delete a specific user', function(done) {
          chai.request(app)
          .delete('/api/v1/users/2')
          .end(function(err, res) {
            if (err) { done(err); }
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body.length).to.equal(29);
            done();
          });
        });
      });

      context('if no user is found', function(){
        it('should return a 404', function(done) {
          chai.request(app)
          .get('/api/v1/fusers/378')
          .end(function(err, res) {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
        });
      });
    });


//SONGS TESTS

    describe('GET /api/v1/songs', function() {
      it('should return all songs', function(done) {
        chai.request(app)
        .get('/api/v1/songs')
        .end(function(err, res) {
          if (err) { done(err); }
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body.length).to.equal(30);
          expect(res.body[0]).to.have.property('lyrics');
          done();
        });
      });
    });

    describe('POST /api/v1/songs', function() {
      it('should add a new song songs', function(done) {
        chai.request(app)
        .post('/api/v1/songs')
        .send({
          name: 'Greatest Song Alive',
          lyrics: `NotgonalieImthegreatestsongalive`,
          id: 31
        })
        .end(function(err, res) {
          if (err) { done(err); }
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body.length).to.equal(31);
          expect(res.body[30].name).to.equal('Greatest Song Alive');
          expect(res.body[30].lyrics).to.equal(`NotgonalieImthegreatestsongalive`);
          expect(res.body[30].id).to.equal(31);
          done();
        });
      });
    });

    describe('GET /api/songs/:id', function() {
      context('if song is found', function(){
        it('should return a specific song', function(done) {
          chai.request(app)
          .get('/api/v1/songs/7')
          .end(function(err, res) {
            if (err) { done(err); }
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body[0].name).to.equal('Codeine Crazy');
            done();
          });
        });
      });

      context('if no song is found', function(){
        it('should return a 404', function(done) {
          chai.request(app)
          .get('/api/v1/songs/378')
          .end(function(err, res) {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
        });
      });
    });

    describe('DELETE /api/songs/:id', function() {
      context('if song is found', function(){
        it('should delete a specific song', function(done) {
          chai.request(app)
          .delete('/api/v1/songs/7')
          .end(function(err, res) {
            if (err) { done(err); }
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body.length).to.equal(29);
            done();
          });
        });
      }); ,                

      context('if no song is found', function(){
        it('should return a 404', function(done) {
          chai.request(app)
          .delete('/api/v1/fsongs/378')
          .end(function(err, res) {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
        });
      });
    });

//CUSTOM TESTS

describe('GET /api/v1/songs/:id/charcount', function() {
  it('should the character length of a songs lyrics', function(done) {
    chai.request(app)
    .get('/api/v1/songs/23/charcount')
    .end(function(err, res) {
      if (err) { done(err); }
      expect(res).to.have.status(200);
      expect(res).to.be.json;
      expect(res.body[0]).to.have.property('charactercount');
      expect(res.body[0].charactercount).to.equal(1941);
      done();
    });
  });
});

  });
