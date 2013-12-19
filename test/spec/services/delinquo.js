'use strict';

describe('Service: delinquo', function () {

  // load the service's module
  beforeEach(module('delinquoFrontendApp'));

  // instantiate service
  var delinquo;
  beforeEach(inject(function (_delinquo_) {
    delinquo = _delinquo_;
  }));

  it('should do something', function () {
    expect(!!delinquo).toBe(true);
  });

});
