'use strict';

angular.module('delinquoFrontendApp')
  .factory('delinquoFactory', function () {

    function getFailureCount (data) {
        var failures = 0;

        for (var i = 0; i < data.length; i += 1){
            if (data[i].fails.length > 0){
                failures ++;
            }
        }
        return failures;
    }

    return function (data){
        data.failureCount = getFailureCount(data);
        return data;
    };

  });
