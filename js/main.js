;(function(){ //IIFE for angular

  function Dropdown() {
    document.getElementByClass("dropdownMenu").classList.toggle("show");
  }
   $('.rightSide a[href="#menu"]').on('click', function(){
     $('.dropdown').toggleClass('dropdownMenu show');
   })

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
      .when('/menurestaurant', {
        templateUrl: 'partials/menurestaurant.html'
      })
      .when('/menutaqueria', {
        templateUrl: 'partials/menutaqueria.html'
      })
    })



})();
