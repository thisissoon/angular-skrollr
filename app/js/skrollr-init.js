"use strict";
/**
 * Initialise skrollrjs
 * @author SOON_
 * @module sn.skrollr
 * @class  snSkrollrInit
 * @example
 *      <div sn-skrollr-init="skrollrInitOptions"></div>
 */
angular.module("sn.skrollr", [])

.directive("snSkrollrInit", [
    "snSkrollrService",
    /**
     * @constructor
     */
    function (snSkrollrService){
        return {
            restrict: "A",
            link: function($scope, $element) {

                var init = $element.attr('sn-skrollr-init');
                snSkrollrService.skrollr(init);

            }
        }
    }
]);
