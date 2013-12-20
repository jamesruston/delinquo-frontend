'use strict';

describe('Service: Delinquofactory', function () {

  // load the service's module
  beforeEach(module('delinquoFrontendApp'));

  // instantiate service
  var Delinquofactory;
  beforeEach(inject(function (_Delinquofactory_) {
    Delinquofactory = _Delinquofactory_;
  }));

  it('should do something', function () {
    expect(!!Delinquofactory).toBe(true);
  });

});
