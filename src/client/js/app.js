var myApp = angular.module('eatable', ['ngRoute']);

var titleVal = "";
var contentVal = "";

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
        })
        .when('/admin', {
            templateUrl: 'html/admin.html',
//        templateUrl: 'http://assets.braingain.co/frontend/html/Feed.html',
            controller: 'adminCntrl'
        })
        .when('/view', {
            templateUrl: 'html/view.html',
//        templateUrl: 'http://assets.braingain.co/frontend/html/Feed.html',
            controller: 'viewCntrl'
        });


});


myApp.controller('cntrl', function ($scope, $http,$window) {
    $http.defaults.xsrfCookieName = 'csrftoken';
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';

    $scope.colorList = [];

    $http.get("/list").success(function (data, status) {

        console.log(data);

        $scope.colorList = data;

    });

    $scope.viewRecipe = function(id){
      console.log("ID==>"+id);
      $http.get("/viewRecipe/"+id).success(function (data, status) {

          console.log(data);
          var title = data.title;
          var content = data.content;

          $window.location.href = '#/view';

          titleVal = data.title;
          contentVal = data.content;


      });
    };
});

myApp.controller('adminCntrl', function ($scope, $http) {
    $http.defaults.xsrfCookieName = 'csrftoken';
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';

    $scope.adminRecipeList = [];



    $http.get("/list").success(function (data, status) {

        console.log(data);
        console.log(data.length);
        $scope.adminRecipeList = data;

    });

    $scope.saveRecipe = function(title,content){

        $http.get("/recipe/"+title+"/"+content).success(function (data, status) {

        }).then(function(){
          $http.get("/list").success(function (data, status) {
              // $scope.adminRecipeList = [];
              $scope.adminRecipeList = data;

          });
        });

    };


    $scope.deleteRecipe = function(id){

      $http.get("/delete/"+id).success(function (data, status) {
        scope.adminRecipeList = data;
      }).then(function(){
        // $http.get("/list").success(function (data, status) {
        //     console.log(data.length);
        //     $scope.adminRecipeList = data;
        //
        // });

      });

    };


});

myApp.controller('viewCntrl', function ($scope, $http) {
  console.log(titleVal);
  $scope.title = titleVal;
  $scope.content = contentVal;
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
