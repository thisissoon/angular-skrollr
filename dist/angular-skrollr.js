/*! angular-skrollr - v0.0.5 - 2015-02-16 */
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
 *      snSkrollrProvider.config({ smoothScrolling: true });
 *      snSkrollr.init();
 */
.provider("snSkrollr", function snSkrollrProvider() {

    var _this = this;

    /**
     * Skrollr initialisation options
     * @property {Object} config
     */
    this.config = {};

    /**
     * Instance of Skrollr
     * @property {Object}  skrollrInstance
     */
    this.skrollrInstance = {};

    /**
     * Has the skrollInstance been initialised
     * @property {Boolean} hasBeenInitialised
     */
    this.hasBeenInitialised = false;

    /**
     * Methods returned on snSkrollr service
     * @property {Object} serviceMethods
     */
    this.serviceMethods = {};

    /**
     * snSkroller service
     */
    this.$get = [
        "$window",
        "$document",
        "$rootScope",
        /**
         * @constructor
         * @param   {Object}  $window    angular wrapper for window
         * @param   {Object}  $document  angular wrapper for document
         * @param   {Object}  $rootScope angular root application scope
         */
        function($window, $document, $rootScope) {

            _this.serviceMethods = {

                /**
                 * Initialise skrollrjs with config options
                 * @method init
                 */
                init: function() {

                    var skrollrInit = function skrollrInit(){
                        _this.skrollrInstance = $window.skrollr.init(_this.config);
                        _this.hasBeenInitialised = true;
                        _this.serviceMethods.refresh();
                    };

                    $document.ready(function () {
                        if (!$rootScope.$$phase) {
                            $rootScope.$apply(skrollrInit);
                        } else {
                            skrollrInit();
                        }
                    });

                },

                /**
                 * Call refresh on Skrollr instance
                 * Useful for resetting skrollr after modifying the DOM
                 * @method refresh
                 */
                refresh: function() {
                    if (_this.hasBeenInitialised) {
                        _this.skrollrInstance.refresh();
                    }
                },

                /**
                 * Call skrollr.destroy()
                 * @method refresh
                 */
                destroy: function() {
                    if (_this.hasBeenInitialised) {
                        _this.skrollrInstance.destroy();
                        _this.hasBeenInitialised = false;
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
