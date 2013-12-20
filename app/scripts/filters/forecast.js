'use strict';

angular.module('delinquoFrontendApp')
  .filter('forecast', function () {
    return function (input) {

        if (input == 0){
            return 'sun';
        }

        if (input >0 && input <= 3){
            return 'changeable';
        }

        if (input >3 && input <= 6){
            return 'cloud';
        }

        if (input >6 && input <= 9){
            return 'rain';
        }

        if (input >9){
            return 'storm';
        }
    };

  });
