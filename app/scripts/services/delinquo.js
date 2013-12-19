'use strict';

angular.module('delinquoFrontendApp')
  .service('delinquo', function delinquo($http) {

    this.getProject = function (projectName, success, error) {
      $http.get('http://delinquo.co.uk/project/' + projectName).then(
        function (response) {
          success(response.data);
        },
        function (response){
          error();
        });
    };
  });
