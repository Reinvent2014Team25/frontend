'use strict';

angular.module('onionApp' )
  .controller('HomeCtrl', function ($scope , $routeParams) {
    
    $scope.eventName = $routeParams.eventName;
    
    $scope.registerUser= function() { 
        
    };

});
