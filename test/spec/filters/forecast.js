'use strict';

describe('Filter: forecast', function () {

  // load the filter's module
  beforeEach(module('delinquoFrontendApp'));

  // initialize a new instance of the filter before each test
  var forecast;
  beforeEach(inject(function ($filter) {
    forecast = $filter('forecast');
  }));

  it('should return the input prefixed with "forecast filter:"', function () {
    var text = 'angularjs';
    expect(forecast(text)).toBe('forecast filter: ' + text);
  });

});
