'use strict';

describe('Controller: ProjectCtrl', function () {

  // load the controller's module
  beforeEach(module('delinquoFrontendApp'));

  var ProjectCtrl,
    scope,
    delinquoServiceStub,
    routeParamsStub;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    delinquoServiceStub = jasmine.createSpyObj('delinquo', ['getProject']);

    routeParamsStub = {project: 'onesport'};

    ProjectCtrl = $controller('ProjectCtrl', {
      $scope: scope,
      delinquo: delinquoServiceStub,
      $routeParams: routeParamsStub
    });
  }));

  describe('calling the delinquo service', function() {
    it('calls the getProject method on the delinquo service', function() {
      expect(delinquoServiceStub.getProject).toHaveBeenCalled();
    });

    it('passes the correct project name', function() {
      expect(delinquoServiceStub.getProject).toHaveBeenCalledWith('onesport', jasmine.any(Function), jasmine.any(Function));
    });

    it('passes the success callback function', function() {
      expect(delinquoServiceStub.getProject).toHaveBeenCalledWith('onesport', ProjectCtrl.serviceSuccess, jasmine.any(Function));
    });

    it('passes the error callback function', function() {
      expect(delinquoServiceStub.getProject).toHaveBeenCalledWith('onesport', ProjectCtrl.serviceSuccess, ProjectCtrl.serviceError);
    });
  });

  describe('successful service call', function(){

    it('sets the runs on the scope', function() {
      var runs = [
        {
          _id: "528b8c8034dac2995e00003e",
          fails: [
            {
              _id: "528b8c8034dac2995e00003f",
              feature: "Event Schedule",
              line: "features/responsive/components/shared/schedule/event_schedule.feature:12",
              scenario: "Has an Event Timeline component",
              step: "I should see the Event Timeline component"
            }
          ],
          timestamp: "1384877719",
          total: "532"
        }
      ];
      ProjectCtrl.serviceSuccess(runs);
      expect(scope.runs).toEqual(runs);
    });

  });



});
