// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.controller('MyController', ['$scope', function($scope) {
    $scope.c10bath = 0;
    $scope.c5bath = 0;
    $scope.c2bath = 0;
    $scope.c1bath = 0;
    $scope.c50satang = 0;
    $scope.c25satang = 0;
    $scope.Total = 0;
    $scope.p10bath = function(count) {
        $scope.c10bath += count;
        $scope.result();
    }
    $scope.p5bath = function(count) {
        $scope.c5bath += count;
        $scope.result();
    }
    $scope.p2bath = function(count) {
        $scope.c2bath += count;
        $scope.result();
    }
    $scope.p1bath = function(count) {
        $scope.c1bath += count;
        $scope.result();
    }
    $scope.p50satang = function(count) {
        $scope.c50satang += count;
        $scope.result();
    }
    $scope.p25satang = function(count) {
        $scope.c25satang += count;
        $scope.result();
    }
    $scope.result = function() {
        $scope.Total = ($scope.c10bath * 10) + ($scope.c5bath * 5) + ($scope.c2bath * 2) + ($scope.c1bath * 1) + ($scope.c50satang * .5) + ($scope.c25satang * .25);
        $scope.Total = parseFloat(Math.round($scope.Total * 100) / 100).toFixed(2);
    }
}])
