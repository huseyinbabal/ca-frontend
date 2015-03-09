'use strict';

/**
 * @ngdoc overview
 * @name caFrontendApp
 * @description
 * # caFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('caFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
