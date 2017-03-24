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

    describe('GET /api/v1/artists', function() {
      it('should return all artists', function(done) {
        chai.request(app)
        .get('/api/v1/artists')
        .end(function(err, res) {
          if (err) { done(err); }
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body.length).to.equal(5);
          expect(res.body[0]).to.have.property('name');
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
          .get('/api/v1/fartists/378')
          .end(function(err, res) {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
        });
      });
    });

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
          .get('/api/v1/fusers/378')
          .end(function(err, res) {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
        });
      });
    });

    describe('GET /api/v1/songs', function() {
      it('should return all songs', function(done) {
        chai.request(app)
        .get('/api/v1/songs')
        .end(function(err, res) {
          if (err) { done(err); }
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body.length).to.equal(15);
          expect(res.body[0]).to.have.property('lyrics');
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
          .get('/api/v1/fsongs/378')
          .end(function(err, res) {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
        });
      });
    });
  });
