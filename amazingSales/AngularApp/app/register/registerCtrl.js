(function () {
    'use strict';
    var registerCtrl = function ($scope) {

        $scope.countries = [{ "name": "India", "code": "IN" },
            { "name": "United States", "code": "US" }
        ];

    };

    angular.module("amazingSales.register")
           .controller('registerCtrl', ['$scope', registerCtrl]);

})();