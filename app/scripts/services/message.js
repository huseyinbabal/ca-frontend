'use strict';

/**
 * @ngdoc service
 * @name caFrontendApp.message
 * @description
 * # message
 * Factory in the caFrontendApp.
 */
angular.module('caFrontendApp')
  .factory('message', ['$http', '$cookies', function ($http, $cookies) {
    var serviceUrl = "http://localhost:9091/messages/";

    return {
      getMessages: function (toUser, success, error) {
        $http.get(serviceUrl + toUser).success(success).error(error)
      },
      saveMessage: function(message, success, error) {
        $http.post(serviceUrl, message).success(success).error(error)
      },
      currentUser: function(user) {
        if (user) {
          $cookies.user = user;
        }
        return $cookies.user;
      },
      signOut: function() {
        delete $cookies.user
        return $cookies.user;
      },
      getAllUsers: function() {
        return ["ahmet", "mehmet", "ali"];
      }
    };
  }]);
