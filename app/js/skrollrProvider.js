"use strict";
/**
 * Provider to configuring skrollr
 * @author SOON_
 * @module sn.skrollr
 * @example
 *      snSkrollrProvider.init({ smoothScrolling: true });
 *      snSkrollr.init();
 */
angular.module("sn.skrollr", [])

.provider("snSkrollr", function snSkrollrProvider() {

    var _this = this;

    this.config = {};

    this.$get = [
        "$window",
        "$rootScope",
        /**
         * @constructor
         * @param   {Object}  $window    angular wrapper for window
         * @param   {Object}  $rootScope angular root application scope
         */
        function($window, $rootScope, $q) {

            return {
                init: function() {

                    angular.element($window).bind("load", function() {
                        $rootScope.$apply(function() {
                            var s = $window.skrollr.init(_this.config);
                        });
                    });

                }
            };
        }
    ];
});
