"use strict";
/**
 * Load and initialise skrollrjs, based on:
 * {@link http://stackoverflow.com/questions/23715337/integrating-skrollr-w-angularjs-single-page-app}
 * @author SOON_
 * @module sn.skrollr
 * @class  snSkrollrService
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

        function onScriptLoad() {
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

        /**
         * Create a script tag with skrollr as the source
         * and call our onScriptLoad callback when it
         * has been loaded
         */
        var scriptTag = $document[0].createElement("script");
        scriptTag.type = "text/javascript";
        scriptTag.async = true;
        scriptTag.src = "components/skrollr/dist/skrollr.min.js";

        scriptTag.onreadystatechange = function () {
            if (this.readyState === "complete") {
                onScriptLoad();
            }
        };

        scriptTag.onload = onScriptLoad;

        var s = $document[0].getElementsByTagName("body")[0];
        s.appendChild(scriptTag);

        return {
            skrollr: function() { return defer.promise; }
        };

    }
 ]);
