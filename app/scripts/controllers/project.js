'use strict';

angular.module('delinquoFrontendApp')
  .controller('ProjectCtrl', function ($scope, delinquo, $routeParams) {
    var self = this;

    this.serviceSuccess = function (data) {
        $scope.runs = data;
    }

    this.serviceError = function () {

    }

    delinquo.getProject($routeParams.project, self.serviceSuccess, self.serviceError);




  }

);
