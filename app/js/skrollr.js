"use strict";
/**
 * Refresh skrollrjs on element init
 * @author SOON_
 * @module sn.skrollr
 * @class  snSkrollr
 */
angular.module("sn.skrollr", [])

.directive("snSkrollr", [
    "$window",
    /**
     * @constructor
     */
    function ($window){
        return {
            restrict: "A",
            link: function($scope, $element) {
                $window.skrollr.refresh();
            }
        }
    }
]);
