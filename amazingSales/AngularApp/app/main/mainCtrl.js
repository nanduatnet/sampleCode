(function () {
    'use strict';

    function mainCtrl($scope, $rootScope, authenticateFact,$state) {
        function init() {
            $scope.navigationTemplate = "AngularApp/app/main/navbar.tpl.html";
            $scope.brandName = "eSales";
            $scope.tabs = [
              { display: "Home", name: "home", template: "AngularApp/app/home/home.tpl.html" },
              { display: "Apparels", name: "apparels",template:"AngularApp/app/sections/apparels.tpl.html" },
              { display: "Gadgets", name: "gadgets", template: "AngularApp/app/sections/gadgets.tpl.html" },
              { display: "Appliances", name: "appliances", template: "AngularApp/app/sections/appliance.tpl.html" }
            ];
            $scope.userDetails = {
                firstName: "",
                lastName:""
            };
            $scope.loadLogin();
        }

        $scope.loadView = function (item) {
            $scope.contentTemplate = item.template;
        };
        $scope.loadRegister = function () {
            $scope.contentTemplate = "AngularApp/app/register/register.tpl.html"
        }
        $scope.loadLogin = function () {
            $scope.contentTemplate = "AngularApp/app/login/login.tpl.html"
        }

        $rootScope.$on("LOGIN_SUCCESS", function (event, args) {
            console.log(args);
            // $scope.userDetails = args.userDetails;
            $scope.userDetails = authenticateFact.getUserInfo();
            $scope.contentTemplate = $scope.loadView($scope.tabs[0]);
        });

        $scope.logOut = function () {
            $scope.userDetails=authenticateFact.logOffUser();
            $state.go('login');
        }
        init();
    }
    angular.module("amazingSales")
           .controller("mainCtrl", ["$scope", "$rootScope",
               "authenticateFact","$state", mainCtrl])


})();