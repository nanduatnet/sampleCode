(function () {
    'use strict';
    var loginCtrl = function ($scope, loginSvc,
        $rootScope, authenticateFact,$state) {
        function init(){
            $scope.login = {
                UserName: "",
                Password: "",
            };
        }
        $scope.loginUser = function () {
            loginSvc.authenticateUser($scope.login)
                   .then(function (response) {
                       console.log(response);
                       if (response) {
                           response.isAuthenticated = true;
                           authenticateFact.setUserInfo(response);
                           $rootScope.$broadcast('LOGIN_SUCCESS', { userDetails: response });
                           $state.go('home', {userData:response});
                       }
                   })
                   .catch(function (response) {
                       console.log(response);
                   });
        };

        init();
    };
    angular.module('amazingSales.login')
           .controller("loginCtrl", ["$scope",
               "loginSvc",
               "$rootScope",
               "authenticateFact",
               "$state",
               loginCtrl]);
})();

//in this example homeCtrl is dependent
//$scope is a service 