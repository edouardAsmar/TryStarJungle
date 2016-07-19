'use strict';

var tryStarJungleApp = angular.module('tryStarJungleApp', ['ngRoute', 'ngMaterial']);

tryStarJungleApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/child-home', {
                templateUrl: 'components/child/child-home-template.html',
                controller: 'ChildHomeController'
            }).
            otherwise({
                redirectTo: '/child-home'
            });
    }]);

tryStarJungleApp.controller('MainController', ['$scope',
    function ($scope) {

        $scope.main = {};
        $scope.childHome = {};
        $scope.main.jokeOfTheDay = "Why did the chicken cross the road?";
        $scope.main.answer = "To get to the other side.";

        $scope.main.showAnswer = false;

        $scope.main.toggleAnswer = function() {
            $scope.main.showAnswer = !$scope.main.showAnswer;
        };
      }]);


