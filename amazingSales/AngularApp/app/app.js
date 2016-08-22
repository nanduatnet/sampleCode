//amazaing Sales 
// requires login so login module included as a dependency
// requires register ==>include register module as a dependency
//amazingSales is dependent
//"amazingSales home and login are service or objects
angular.module("amazingSales",
    [
"amazingSales.common",
"amazingSales.home",
"amazingSales.login",
"amazingSales.register",
"amazingSales.cart",
"amazingSales.gadgets",
"ui.router"
]);

angular.module("amazingSales")
       .config(["$stateProvider", "$urlRouterProvider",
           function ($stateProvider, $urlRouterProvider) {
               
               //Defining States
               var home = {
                   name: "home",
                   url: "/home",
                   controller:"homeCtrl",
                   params:{userData:""},
                   templateUrl:"AngularApp/app/home/home.tpl.html"
               
               };
               var login = {
                   name: "login",
                   url: "/login",
                   controller:"loginCtrl",
                   templateUrl: "AngularApp/app/login/login.tpl.html"
               };
               var register = {
                   name: "register",
                   url: "/register",
                   controller:"registerCtrl",
                   templateUrl: "AngularApp/app/register/register.tpl.html"
               };
               var gadgets = {
                   name: "gadgets",
                   url: "/gadgets",
                   controller:"gadgetsCtrl",
                   templateUrl: "AngularApp/app/gadgets/gadgets.tpl.html"
               };
               
               //registering the state
               $stateProvider.state("home", home);
               $stateProvider.state("login", login);
               $stateProvider.state("register", register);
               $stateProvider.state("gadgets", gadgets);

               //if the url don't match then go the default page.
               $urlRouterProvider.otherwise("/login");

       }]);
