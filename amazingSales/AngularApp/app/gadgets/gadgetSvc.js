(function () {
    'use strict';

    var gadgetSvc = function (productSvc,$http,$q) {

        var myGadgets = "";
        this.getGadgetsWithDiscount = function () {
            angular.forEach(gadgets, function (item) {
                item.discount = productSvc.getDiscounts(item);
            });
            console.log(gadgets);
            return gadgets
        };
        
        //this.getGadgetsFromApi = function () {
        //    return $http.get("api/product");
        //};

        this.getGadgetsFromApi = function () {
            //1. create a deffered Object
            var dfd = $q.defer();

            if (myGadgets) {
                dfd.resolve(myGadgets);
            }
            else {
                //$http.get("api/product")
                $http.get("AngularApp/app/data/gadgets.json")
                    .then(function (response) {
                        //positive response
                        myGadgets = response.data;
                        //Step3
                        dfd.resolve(myGadgets);

                    }).catch(function (errorResponse) {
                        //negative response
                        //step 4
                        dfd.reject(errorResponse);
                    });
            }
            //step 2
            return dfd.promise;
        };
       var gadgets= [
				{
				    name: "Galaxy S7",
				    specification: "Hybrid Dual SIM, microSD up to 200GB",
				    price: 20000,
				    imgurl: "../../img/image2.jpg",
				    description: "Motion Panorama, Selfie Flash Water & dust resistant (IP68)",
				    more: {
				        flag: false,
				        name: "more"
				    }
				},
				{
				    name: "Galaxy S6 edge+",
				    specification: "Dual Edge Glass and Metal Finishing",
				    price: 10000,
				    imgurl: "../../img/image3.jpg",
				    description: "Purposeful Edge Live Broadcast",
				    more: {
				        flag: false,
				        name: "more"
				    }
				},
				{
				    name: "Galaxy S6 edge",
				    specification: "CPU: Quad-core, 1.2 GHz",
				    price: 20000,
				    imgurl: "../../img/image4.jpg",
				    description: "Display: Super AMOLED, 720 x 1280 (HD) Resolution: 8 MP",
				    more: {
				        flag: false,
				        name: "more"
				    }
				}
        ];
    };
    angular.module('amazingSales.gadgets')
        .service("gadgetSvc", ["productSvc", "$http", "$q",
            gadgetSvc]);

})();
// Services are constructor functions
// Service is used to cater the data to the application.
//
// service is used to hold the business logic for the application.
// Service is used to talk to the backend api's.
// BackEnd api could be .net, java, node, php or webservice.