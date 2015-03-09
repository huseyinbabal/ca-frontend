'use strict';

/**
 * @ngdoc function
 * @name caFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the caFrontendApp
 */
angular.module('caFrontendApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
