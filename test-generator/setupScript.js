setupScript.js

var chai = require('chai');
chai.use(require('../utils/nonStrictEquality'));
var expect = chai.expect;
var mongodb = require('mongodb');
var _ = require('lodash');
var connectionString = require('../../mongoConnectionString').mongoDbUrl;
var Promise = require('bluebird');
var dtg = require('./dynamicTestGeneration');

describe('MongoDb acess', function () {
  var gDb = mongodb.MongoClient.connect(connectionString);
  var collectionName = "countryRaw";

  before(function (done) {
    Promise.resolve(gDb)
      .then(function (db) {
        gDb = db;
        done();
      })
      .catch(function (error) {
        done(error);
      });
  });

  after(function (done) {
    Promise.resolve(gDb.close()).then(done);
  });

  it('Retrieves data', function (done) {
    //this test case also ensures that nested describe (with dynamically generated tests) gets its promises executed
    Promise.resolve(gDb.collection(collectionName))
      .then(function (collection) {
        return Promise.resolve(collection.find().toArray());
      })
      .then(function (data) {
        expect(_.size(data[0])).to.be.above(0);
        done();
      });
  });

  describe('Compares its OW data to WEC data in csv files', function () {
    Promise.resolve(gDb)
      .then(function (db) {
        return Promise.resolve(db.collection(collectionName).find().toArray())
          .then(function (docs) {
            dtg(docs);
          });
      })
      .then(function () { gDb.close(); })
      .catch(function () { gDb.close(); })
      .done();
  });
});
