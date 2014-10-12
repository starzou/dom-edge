'use strict';

angular.module('App')
  .controller('NavbarCtrl', ['$scope', function ($scope) {
    $scope.date = new Date();
  }]);
