"use strict";
/**
 * Initialise skrollrjs
 * @author SOON_
 * @module sn.skrollr
 * @class  snSkrollrService
 */
angular.module("sn.skrollr").service("snSkrollrService", [
    "$q",
    "$rootScope",
    "$window",
    /**
     * @constructor
     * @param   {Service} $q         promise service
     * @param   {Object}  $rootScope data on rootScope
     * @param   {Object}  $window    angular wrapper for window object
     */
    function($q, $rootScope, $window){

        var defer = $q.defer();

        var onScriptLoad = function onScriptLoad() {
            // Load skrollr.js in the browser
            $rootScope.$apply(function() {
                var s = $window.skrollr.init({
                        forceHeight: false,
                        smoothScrolling: true,
                        mobileDeceleration: 0.004
                    });
                defer.resolve(s);
            });
        }

        angular.element($window).bind('load', function() {
            onScriptLoad();
        });

        return {
            skrollr: function() { return defer.promise; }
        };

    }
 ]);
