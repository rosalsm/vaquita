;(function(){ //IIFE 

//click on the "menu", show/hide dropdown
   $('.nav-container .menu-drop').on('click', function(){
     $('.dropdown').toggleClass('dropdownMenu show');
   });
//click on the nav, hide dropdown
    $('.nav-container a[href]').on('click', function(){
      $('.dropdown').removeClass('show').addClass('dropdownMenu');
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
