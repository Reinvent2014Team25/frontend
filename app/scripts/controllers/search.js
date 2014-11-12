'use strict';

angular.module('onionApp' )
  .controller('SearchCtrl', function ($scope , $http , $location) {
    
    $scope.nearByEvents = false;
    
    $scope.searchForEvents= function(eventName) { 
        console.log(eventName);
        $http({method: 'GET',
            url: 'http://ec2-54-67-12-2.us-west-1.compute.amazonaws.com/api/events'
            
        }).success(function(data, status, headers, config) {
            $scope.nearByEvents = true;
            $scope.events = data;
//            console.log(data);
        }).error(function(data, status, headers, config) {
            console.log(status);
            console.log(data);
                
        });
    };
    
    $scope.register = function(eventName){
        console.log('registering for '+eventName);
        $location.path('/register/'+eventName);
    };

});
