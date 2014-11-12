'use strict';

angular.module('onionApp' )
  .controller('HomeCtrl', function ($rootScope ,$scope , $routeParams) {
    
    $scope.eventName = $routeParams.eventName;
    
    $scope.registerUser= function() { 
        
    };

});
