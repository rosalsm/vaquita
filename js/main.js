;(function(){ //IIFE for angular

//click on the menu, show/hide dropdown
   $('.rightSide a[href="#menu"]').on('click', function(){
     $('.dropdown').toggleClass('dropdownMenu show');
   });
//click on the inside dropdown, show/hide dropdown
   $('.dropdown a[href]').on('click',function(){
     $('.dropdown').toggleClass('dropdownMenu show');
   });

  angular.module('vaquita', ['ngRoute'], function($routeProvider){
    $routeProvider
      .when('/', {
        redirectTo: 'home'
      })
      .when('/home', {
        templateUrl: 'partials/home.html'
      })
      .when('/locations', {
        templateUrl: 'partials/locations.html'
      })
      .when('/specials', {
        templateUrl: 'partials/specials.html'
      })
      .when('/menurestaurant', {
        templateUrl: 'partials/menurestaurant.html'
      })
      .when('/menutaqueria', {
        templateUrl: 'partials/menutaqueria.html'
      })
    })



})();
