process.env.NODE_ENV = 'test';

const configuration = require('../knexfile')['test'];
const database = require('knex')(configuration);
const chai = require('chai');

const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../server.js');


chai.use(chaiHttp);

describe('Server', () => {
  beforeEach((done) => {
    database.migrate.rollback()
  .then(() => {
    database.migrate.latest()
    .then(() => {
      return database.seed.run()
      .then(() => {
        done();
      });
    });
  });
  });
  it('should exist', () => {
    expect(app).to.exist;
  });

  describe('GET /', () => {
    it('should return a 200 and html', (done) => {
      chai.request(app)
      .get('/')
      .end((err, res) => {
        if (err) { done(err); }
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        done();
      });
    });
  });

      //  ARTISTS TEST

  describe('GET /api/v1/artists', () => {
    it('should return all artists', (done) => {
      chai.request(app)
      .get('/api/v1/artists')
      .end((err, res) => {
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

  describe('POST /api/v1/artists', () => {
    it('should add a new artist', (done) => {
      chai.request(app)
        .post('/api/v1/artists')
        .send({
          name: 'Muddy Waters',
          id: 31
        })
        .end((err, res) => {
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

  describe('GET /api/artists/:id', () => {
    context('if artist is found', () => {
      it('should return a specific artist', (done) => {
        chai.request(app)
          .get('/api/v1/artists/2')
          .end((err, res) => {
            if (err) { done(err); }
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body[0].name).to.equal('Kanye West');
            done();
          });
      });
    });

    context('if no artist is found', () => {
      it('should return a 404', (done) => {
        chai.request(app)
          .get('/api/v1/artists/378')
          .end((err, res) => {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
      });
    });
  });

  describe('DELETE /api/artists/:id', () => {
    context('if artist is found', () => {
      it('should delete a specific artist', (done) => {
        chai.request(app)
          .delete('/api/v1/artists/2')
          .end((err, res) => {
            if (err) { done(err); }
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body.length).to.equal(29);
            done();
          });
      });
    });

    context('if no artist is found', () => {
      it('should return a 404', (done) => {
        chai.request(app)
          .get('/api/v1/fartists/378')
          .end((err, res) => {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
      });
    });
  });

    //  USERS TESTS

  describe('GET /api/v1/users', () => {
    it('should return all users', (done) => {
      chai.request(app)
        .get('/api/v1/users')
        .end((err, res) => {
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

  describe('POST /api/v1/users', () => {
    it('should add a new user', (done) => {
      chai.request(app)
        .post('/api/v1/users')
        .send({
          first_name: 'Buddy',
          last_name: 'Bottomers',
          email: 'buddybottomers@gmail.com',
          id: 31
        })
        .end((err, res) => {
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

  describe('GET /api/users/:id', () => {
    context('if user is found', () => {
      it('should return a specific user', (done) => {
        chai.request(app)
          .get('/api/v1/users/2')
          .end((err, res) => {
            if (err) { done(err); }
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body[0].first_name).to.equal('Raymond');
            done();
          });
      });
    });

    context('if no user is found', () => {
      it('should return a 404', (done) => {
        chai.request(app)
          .get('/api/v1/users/378')
          .end((err, res) => {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
      });
    });
  });

  describe('DELETE /api/users/:id', () => {
    context('if user is found', () => {
      it('should delete a specific user', (done) => {
        chai.request(app)
          .delete('/api/v1/users/2')
          .end((err, res) => {
            if (err) { done(err); }
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body.length).to.equal(29);
            done();
          });
      });
    });

    context('if no user is found', () => {
      it('should return a 404', (done) => {
        chai.request(app)
          .get('/api/v1/fusers/378')
          .end((err, res) => {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
      });
    });
  });


// SONGS TESTS

  describe('GET /api/v1/songs', () => {
    it('should return all songs', (done) => {
      chai.request(app)
        .get('/api/v1/songs')
        .end((err, res) => {
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

  describe('POST /api/v1/songs', () => {
    it('should add a new song songs', (done) => {
      chai.request(app)
        .post('/api/v1/songs')
        .send({
          name: 'Greatest Song Alive',
          lyrics: 'NotgonalieImthegreatestsongalive',
          id: 31
        })
        .end((err, res) => {
          if (err) { done(err); }
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          expect(res.body).to.be.a('array');
          expect(res.body.length).to.equal(31);
          expect(res.body[30].name).to.equal('Greatest Song Alive');
          expect(res.body[30].lyrics).to.equal('NotgonalieImthegreatestsongalive');
          expect(res.body[30].id).to.equal(31);
          done();
        });
    });
  });

  describe('GET /api/songs/:id', () => {
    context('if song is found', () => {
      it('should return a specific song', (done) => {
        chai.request(app)
          .get('/api/v1/songs/7')
          .end((err, res) => {
            if (err) { done(err); }
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body[0].name).to.equal('Codeine Crazy');
            done();
          });
      });
    });

    context('if no song is found', () => {
      it('should return a 404', (done) => {
        chai.request(app)
          .get('/api/v1/songs/378')
          .end((err, res) => {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
      });
    });
  });

  describe('DELETE /api/songs/:id', () => {
    context('if song is found', () => {
      it('should delete a specific song', (done) => {
        chai.request(app)
          .delete('/api/v1/songs/7')
          .end((err, res) => {
            if (err) { done(err); }
            expect(res).to.have.status(200);
            expect(res).to.be.json;
            expect(res.body).to.be.a('array');
            expect(res.body.length).to.equal(29);
            done();
          });
      });
    });

    context('if no song is found', () => {
      it('should return a 404', (done) => {
        chai.request(app)
          .delete('/api/v1/fsongs/378')
          .end((err, res) => {
            expect(res).to.have.status(404);
            expect(res.body).to.be.a('object');
            done();
          });
      });
    });
  });

//  CUSTOM TESTS

  describe('GET /api/v1/songs/:id/charcount', () => {
    it('should the character length of a songs lyrics', (done) => {
      chai.request(app)
    .get('/api/v1/songs/23/charcount')
    .end((err, res) => {
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
