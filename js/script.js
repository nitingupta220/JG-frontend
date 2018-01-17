var app = angular.module('JGApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'searchController'
        })
        .when('/result', {
            templateUrl: 'pages/result.html',
            controller: 'resultController'
        })


});

app.controller('searchController', function ($scope, $http, $location) {
    'use strict';
    $scope.username = "";
    $scope.select = "";

    $scope.Login = function () {
        if ($scope.username == "Jack" && $scope.select == "4") {
            $scope.username = "";
            $scope.select = "";
            $location.path("result");
        } else {
            alert('Please select valid Artist and Track number!!!');
            $scope.username = "";
            $scope.select = "";
        }
    }
});

app.controller('resultController', function ($scope, $http, $location) {
    'use strict';
    $scope.message = "Search results for 'Jack.'"
    $http.get("https://itunes.apple.com/search?term=jack&limit=4")
        .then(function (response) {
            $scope.search = response.data.results;
            // console.log(search);
        });

});
