"use strict";
/**
 * Refresh skrollrjs on element load
 * @author SOON_
 * @module sn.skrollr
 * @class  snSkrollr
 */
angular.module("sn.skrollr").directive("snSkrollr", [
    "snSkrollrService",
    /**
     * @constructor
     */
    function (snSkrollrService){
        return {
            restrict: "A",
            link: function($scope, $element) {
                snSkrollrService.skrollr().then(function(skrollr){
                    skrollr.refresh();
                });
            }
        };
    }
]);
