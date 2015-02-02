"use strict";
/**
 * Initialise skrollrjs
 * @author SOON_
 * @module sn.skrollr
 * @class  snSkrollrService
 * @example
 *      snSkrollrService.skrollr(init)
 */
angular.module("sn.skrollr").service("snSkrollrService", [
    "$document",
    "$q",
    "$rootScope",
    "$window",
    /**
     * @constructor
     * @param   {Object}  $document  angular wrapper for document
     * @param   {Service} $q         promise service
     * @param   {Object}  $rootScope data on rootScope
     * @param   {Object}  $window    angular wrapper for window object
     */
    function($document, $q, $rootScope, $window){

        var defer = $q.defer();

        var onScriptLoad = function onScriptLoad(init) {
            $rootScope.$apply(function() {
                var s = $window.skrollr.init(init);
                defer.resolve(s);
            });
        }

        return {
            skrollr: function(init) {
                angular.element($window).bind('load', function() {
                    onScriptLoad(init);
                });

                return defer.promise;
            }
        };

    }
 ]);
