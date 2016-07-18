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
      }]);


