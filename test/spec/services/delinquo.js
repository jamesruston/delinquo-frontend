'use strict';

describe('Service: delinquo', function () {

  // load the service's module
  beforeEach(module('delinquoFrontendApp'));

  // instantiate service
  var delinquo,
      httpBackend;

  beforeEach(inject(function (_delinquo_, $httpBackend) {
    delinquo = _delinquo_;
    httpBackend = $httpBackend;
  }));

  it('should do something', function () {
    expect(!!delinquo).toBe(true);
  });

  it('should make a call to the delinquo API', function() {
    httpBackend.expectGET('http://delinquo.co.uk/project/onesport').respond(200);
    delinquo.getProject('onesport', function() {});
    httpBackend.flush();
  });

  it('invokes the success callback on success', function() {
    httpBackend.expectGET('http://delinquo.co.uk/project/onesport').respond(200);
    var successSpy = jasmine.createSpy('success');
    delinquo.getProject('onesport', successSpy);
    httpBackend.flush();
    expect(successSpy).toHaveBeenCalled();
  });

  it('invokes the error callback on error', function() {
    httpBackend.expectGET('http://delinquo.co.uk/project/onesport').respond(400);
    var successSpy = jasmine.createSpy('success');
    var errorSpy = jasmine.createSpy('error');
    delinquo.getProject('onesport', successSpy, errorSpy);
    httpBackend.flush();
    expect(successSpy).not.toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalled();
  });

  it('passes the response data to the success callback', function() {
    httpBackend.expectGET('http://delinquo.co.uk/project/onesport').respond(200, {someData: 'someData'});
    var successSpy = jasmine.createSpy('success');
    delinquo.getProject('onesport', successSpy);
    httpBackend.flush();
    expect(successSpy).toHaveBeenCalledWith({someData: 'someData'});
  });

});
