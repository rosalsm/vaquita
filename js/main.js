;(function(){ //IIFE for angular

  angular.module('vaquita', ['ngRoute'], function($routeProvider){
    $routeProvider
      .when('/',{
        redirectTo: 'home'
      })
      .when('/locations', {
        templateUrl: 'partials/locations.html'
      })
      .when('/specials', {
        templateUrl: 'partials/specials.html'
      })
      .when('/menu', {
        templateUrl: 'partials/menurestaurant.html'
      })
    })



})();
