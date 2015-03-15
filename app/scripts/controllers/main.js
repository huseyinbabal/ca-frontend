'use strict';

/**
 * @ngdoc function
 * @name caFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the caFrontendApp
 */
angular.module('caFrontendApp')
  .controller('MainCtrl', ['$scope', 'message', '$window', '$interval', function ($scope, message, $window, $interval) {
    $scope.currentUser = message.currentUser();
    $scope.toUser = null;

    $scope.allUsers = message.getAllUsers();

    $scope.signin = function() {
      $scope.currentUser = message.currentUser($scope.user);
    };

    $scope.setToUser = function(user) {
      $scope.toUser = user;
    };

    $scope.signOut = function() {
      message.signOut();
      $window.location.reload();
    };

    $interval(getMessages, 2000);





    function getMessages() {
      message.getMessages($scope.currentUser, function(data) {
        $scope.messages = data;
      }, function(error) {
        console.log("Error occured while getting messages")
      });
    }

    // Send message
    $scope.sendMessage = function() {
      var msg = {
        from: $scope.currentUser,
        to: $scope.toUser,
        message: $scope.messageText
      };

      message.saveMessage(msg, function (data) {
        $scope.getMessages();
      }, function (error) {
        console.log('Error occured while saving message')
      })
    };

  }]);
