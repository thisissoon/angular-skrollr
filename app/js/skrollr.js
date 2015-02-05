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

    this.skrollrInstance = {};

    this.hasBeenInitialised = false;

    this.serviceMethods = {};

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

            _this.serviceMethods = {

                /**
                 * [[Description]]
                 * @method
                 */
                init: function() {

                    var skrollrInit = function skrollrInit(){
                        _this.skrollrInstance = $window.skrollr.init(_this.config);
                        _this.hasBeenInitialised = true;
                        _this.serviceMethods.refresh();
                    };

                    $document.ready(function () {
                        if (!$rootScope.$$phase) {
                            $rootScope.$apply(function() {
                                skrollrInit();
                            });
                        } else {
                            skrollrInit();
                        }
                    });

                },
                refresh: function() {
                    if (_this.hasBeenInitialised) {
                        _this.skrollrInstance.refresh();
                    }
                }
            };

            return _this.serviceMethods;
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
