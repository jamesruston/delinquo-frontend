'use strict';

angular.module('delinquoFrontendApp')
  .filter('typeOfRunner', function () {
    return function (input) {

      var cssClass = 'success';

      if (input == "cucumber") {
        cssClass = 'cucumber';
      } else if (input == 'jasmine') {
        cssClass = 'jasmine';
      } else {
        cssClass = 'primary'
      }

      return cssClass;

    };
  });
