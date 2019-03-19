// DynamicallyGenerated tests.js

'use strict';

var chai = require('chai');
chai.use(require('../utils/nonStrictEquality'));
var expect = chai.expect;
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var papap = require('papaparse');
var engine = require('../../server/engine.js');

module.exports = function testGeneration(docs) {
  var processedCountryData = docs.map(function (doc) { return engine.country_metrics(doc, null); });
  var countriesOWMetrics = engine.normalized_scores(processedCountryData);
  var filesNamesSortedDesc = _.orderBy(fs.readdirSync(path.join(__dirname, 'csv')), [], ['desc', 'asc']);

  _.each(filesNamesSortedDesc, function iterateValidationDataCsvFiles(fileName) {
    var year = fileName.split('.')[0];
    var fileContent = fs.readFileSync(path.join(__dirname, 'csv', fileName), 'utf8');
    var parsedWecContent = papap.parse(fileContent, { header: true });
    _.each(parsedWecContent.data, function iterateIndividualDataCsvFiles(wecCountryData) {
      var country = wecCountryData.Country;
      var checkOwCountry = _.find(countriesOWMetrics, function (owCountryMetrics) { return owCountryMetrics.country === country; });
      if (checkOwCountry == null) return;
      delete wecCountryData.Country;
      iterateCountryMetricsAndGenerateTest(wecCountryData, country, year);
    });
  });

  function iterateCountryMetricsAndGenerateTest(wecCountryData, country, year) {
    _.forOwn(wecCountryData, function (value, key) {
      var roundingPrecision = 2;
      var owCountry = _.find(countriesOWMetrics, function (owCountryMetrics) { return owCountryMetrics.country === country; });
      var wecValue = isNaN(parseFloat(value)) ? String(value).trim() : _.round(parseFloat(value), roundingPrecision);
      var owValue = isNaN(parseFloat(owCountry[key])) ? String(owCountry[key]).trim() : _.round(parseFloat(owCountry[key]), roundingPrecision);
      describe('Country ' + country + ' in year ' + year + ' for metric "' + key + '" with WEC value ' + wecValue, function () {
        it(' matches OW value ' + owValue, function () {
          expect(wecValue).to.equal(owValue);
        });
      });
    });
  }
};
