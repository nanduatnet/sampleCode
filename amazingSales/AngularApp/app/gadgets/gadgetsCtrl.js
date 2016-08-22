(
	function(){
	'use strict';

	function gadgetsController($scope, gadgetSvc) {
		function init(){
		    //$scope.gadgets = gadgetSvc.getGadgetsWithDiscount();

		    $scope.displayContent = function (item) {
		        item.more.flag = !item.more.flag;
		        item.more.name = (item.more.flag) ? "less" : "more";
		    };
		    gadgetSvc.getGadgetsFromApi()
                .then(function (response) {
                    console.log(response);
                    $scope.gadgets = response.data;
                }).catch(function (errorResponse) {
                    console.log(errorResponse);
                });
		}

		init();
	}

	angular.module('amazingSales.gadgets').controller("gadgetsCtrl",
        ["$scope","gadgetSvc", gadgetsController]);

})();