(function () {
    'use strict';
    var homeCtrl = function ($scope,$state) {
       // var title = "Dear Customer welcome to the amazing sales";
        $scope.title = "Dear Customer";

        $scope.clickMe = function () {
            console.log($scope);
        };
        console.log($state);
    };
    angular.module('amazingSales.home')
           .controller("homeCtrl", ["$scope",'$state',homeCtrl]);
})();

//in this example homeCtrl is dependent
//$scope is a service 