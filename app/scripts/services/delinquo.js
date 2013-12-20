'use strict';

angular.module('delinquoFrontendApp')
  .service('delinquo', function delinquo($http, CONFIG, delinquoFactory) {

    this.getProject = function (projectName, success, error) {
      $http.get(CONFIG.delinquoBaseUrl + '/project/' + projectName).then(
        function (response) {
          success(new delinquoFactory(response.data));
        },
        function (response){
          error();
        });
    };
  });
