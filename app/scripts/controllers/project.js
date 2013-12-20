'use strict';

angular.module('delinquoFrontendApp')
  .controller('ProjectCtrl', function ($scope, delinquo, $routeParams, CONFIG) {
    var self = this;

    this.serviceSuccess = function (data) {
      $scope.runs = data;
      console.log('connecting to: ' + CONFIG.delinquoBaseUrl.replace('http://','ws://') + '/' + $routeParams.project);
      var socket = new WebSocket(CONFIG.delinquoBaseUrl.replace('http://','ws://') + '/project/' + $routeParams.project);
      socket.onopen = function(){
        console.log("socket has been opened!");
        socket.onmessage = function(event) {
          console.log(event.data);
          if(event.data) {
            self.updateRun(event.data);
            $scope.$apply();
            window.runs = $scope.runs;
          }
        }
      }
    };

    this.serviceError = function () {
      console.log('error fetching project json');
    };

    this.updateRun = function(run) {
      console.log('updating run');
//      for(var i = 0; i < $scope.runs.length; i++) {
//        if($scope.runs[i].id === run.id){
//          console.log('updating existing run');
//          $scope.runs[i] = run;
//          return;
//        }
//      }
      console.log('adding new run');
      $scope.runs.push(JSON.parse(run));
    };

    delinquo.getProject($routeParams.project, self.serviceSuccess, self.serviceError);




  }

);
