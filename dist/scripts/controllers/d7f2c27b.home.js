'use strict';

angular.module('onionApp' )
  .controller('HomeCtrl', function ($scope) {
    $scope.events = [
     {name:'Hyde park', date:'25th May' , time :'9am'},
      {name:'Hyde park London', date:'25th May' , time :'11am'},
      {name:'Regents park', date:'1st June' ,time :'9am'},
      {name:'Finsburg park', date:'3rd June' ,time :'1pm'},
      {name:'Enfield London', date:'20th June', time :'1pm'}
    ];
    
    
    $scope.saveaccount= function() { 
        
    }
//    $scope.saveCustomer = function(status, response) {
//        $rootScope.user.stripeCustomerId = response.id;
//        $rootScope.user.save();
//    };
  });
