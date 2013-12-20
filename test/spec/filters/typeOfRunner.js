'use strict';

describe('Filter: typeOfRunner', function () {

  // load the filter's module
  beforeEach(module('delinquoFrontendApp'));

  // initialize a new instance of the filter before each test
  var typeOfRunner;
  beforeEach(inject(function ($filter) {
    typeOfRunner = $filter('typeOfRunner');
  }));

  it('should return the input prefixed with "typeOfRunner filter:"', function () {
    var text = 'angularjs';
    expect(typeOfRunner(text)).toBe('typeOfRunner filter: ' + text);
  });

});
