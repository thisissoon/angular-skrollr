"use strict";
/**
 * Wrap skrollr.js
 * @author SOON_
 * @module sn.skrollr
 */
angular.module("sn.skrollr", [])

/**
 * Provider to configuring skrollr
 * @example
 *      snSkrollrProvider.init({ smoothScrolling: true });
 *      snSkrollr.init();
 */
.provider("snSkrollr", function snSkrollrProvider() {

    var _this = this;

    this.config = {};

    this.$get = [
        "$window",
        "$document",
        "$rootScope",
        /**
         * @constructor
         * @param   {Object}  $window    angular wrapper for window
         * @param   {Object}  $rootScope angular root application scope
         */
        function($window, $document, $rootScope) {

            return {
                init: function() {

                    $document.ready(function () {
                        $rootScope.$apply(function() {
                            var s = $window.skrollr.init(_this.config);
                        });
                    });

                }
            };
        }
    ];
})

/**
 * Refresh skrollrjs on element init
 * @class  snSkrollr
 */
.directive("snSkrollr", [
    "$window",
    /**
     * @constructor
     */
    function ($window){
        return {
            restrict: "AE",
            link: function($scope, $element) {
                $window.skrollr.refresh();
            }
        };
    }
]);
