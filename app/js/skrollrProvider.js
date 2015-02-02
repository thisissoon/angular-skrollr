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

    this.init = {};

    this.$get = [
        "$window",
        "$rootScope",
        "$q",
        /**
         * @constructor
         * @param   {Object}  $window    angular wrapper for window
         * @param   {Object}  $rootScope angular root application scope
         * @param   {Service} $q         asynchronous promise/defer library
         */
        function($window, $rootScope, $q) {

            return {
                init: function() {
                    var defer = $q.defer();

                    angular.element($window).bind('load', function() {
                        $rootScope.$apply(function() {
                            var s = $window.skrollr.init(_this.init);
                            defer.resolve(s);
                        });
                    });

                    return defer.promise;
                }
            }
        }
    ];
});
