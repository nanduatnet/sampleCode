(function () {
    'use strict';

    var productSvc = function () {
        this.getDiscounts = function (item) {
            var discount = {
                percentage: 0,
                decimals:1
            }
            if (item.price >= 10000 && item.price<20000) {
                discount.percentage = 10;
                discount.decimals = .1;
                return discount;
            }
            if (item.price >= 20000) {
                discount.percentage = 12;
                discount.decimals = .12;
                return discount;
            }
            else {
                return discount;
            }
        }
    };
    angular.module('amazingSales.common')
        .service("productSvc", [productSvc]);

})();
