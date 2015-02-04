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

            var s,
                serviceMethods,
                init = 0;

            serviceMethods = {
                init: function() {

                    $document.ready(function () {
                        $rootScope.$apply(function() {
                            s = $window.skrollr.init(_this.config);
                            init = 1;
                            serviceMethods.refresh();
                        });
                    });

                },
                refresh: function() {
                    if (init === 1) {
                        s.refresh();
                    }
                }
            };

            return serviceMethods;
        }
    ];
})

/**
 * Refresh skrollrjs on element init
 * @class  snSkrollr
 */
.directive("snSkrollr", [
    "snSkrollr",
    /**
     * @constructor
     */
    function (snSkrollr){
        return {
            restrict: "AE",
            link: function($scope, $element) {
                snSkrollr.refresh();
            }
        };
    }
]);
