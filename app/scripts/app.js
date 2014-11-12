'use strict';

angular.module('onionApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html'
      })
      .when('/register/:eventName', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/search', {
        templateUrl: 'views/search.html'
      })
      .when('/signup-completed', {
        templateUrl: 'views/signup-completed.html'
      })      
      .otherwise({
        redirectTo: '/'
      });
  });
