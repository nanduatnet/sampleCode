(function () {
    'use strict';
    var aunthenticateFact = function () {
        var userDetails = {};
        var resetUserDetails = function () {
            userDetails.FirstName = "";
            userDetails.LastName = "";
            userDetails.Age = "";
            userDetails.isAuthenticated = "";
            userDetails.PhoneNumber = "";
            userDetails.Email = "";
            return userDetails;
        };
        var setUserDetails = function (details) {
            userDetails = details;
        };
        var getUserDetails = function () {
            return userDetails;
        };
        return {
            getUserInfo: getUserDetails,
            setUserInfo: setUserDetails,
            logOffUser: resetUserDetails
        };
};
    angular.module('amazingSales.common')
       .factory("authenticateFact", [aunthenticateFact]);
})();

