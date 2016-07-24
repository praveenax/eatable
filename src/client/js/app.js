var myApp = angular.module('eatable', ['ngRoute']);


myApp.config(function ($routeProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
        // Allow same origin resource loads.
        'self'
      ]);

    $routeProvider
        .when('/', {
            templateUrl: 'html/dish.html',
//        templateUrl: 'http://assets.braingain.co/frontend/html/Feed.html',
            controller: 'cntrl'
        });


});


myApp.controller('cntrl', function ($scope, $http) {
    $http.defaults.xsrfCookieName = 'csrftoken';
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';

    $scope.colorList = [
        "lightBlue", "lightGreen", "lightViolet", "yellow", "orange", "red"
    ];



});

myApp.directive('playmeter', function () {
    return {
        restrict: 'E',
        scope: true,
        replace: true,
        templateUrl: '/html/playmeter.html',
        link: function (scope, elem, attrs) {
            // do stuff
            scope.tAttrs = attrs;

        }
    };


});
