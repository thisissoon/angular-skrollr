"use strict";
/**
 * @module   sn.example
 * @main     sn.example
 * @author   SOON_
 * @requires ngRoute {@link https://docs.angularjs.org/api/ngRoute}
 */
angular.module("sn.example", ["ngRoute"]);
;"use strict";
/**
 * Configuration for sn.example dependencies are set here.
 * @module sn.example
 * @author SOON_
 */
angular.module("sn.example").config([
    "$routeProvider",
    "$locationProvider",
    /**
     * @constructor
     * @param {Service} $routeProvider
     * @param {Service} $locationProvider
     */
    function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true).hashPrefix = "!";

        $routeProvider
            .when("/", {
                templateUrl: "partials/search.html",
                controller: "SearchCtrl"
            })
            .when("/results", {
                templateUrl: "partials/results.html",
                controller: "ResultsCtrl"
            })
            .otherwise({
                redirectTo: "/"
            });

    }
]);
;"use strict";
/**
 * Controller to perform search in sn.example.
 * @class  SearchCtrl
 * @module sn.example
 * @author SOON_
 */
angular.module("sn.example").controller("SearchCtrl", [
    "$scope",
    "$rootScope",
    "$http",
    "$location",
    /**
     * @constructor
     * @param {Object}  $scope
     * @param {Service} $rootScope
     * @param {Service} $http
     * @param {Service} $location
     */
    function ($scope, $rootScope, $http, $location) {

        /**
         * Search locations based on val
         * @method getLocation
         * @param  {String} val location to query
         */
        $scope.getLocation = function getLocation(val){
            $http.get("http://maps.googleapis.com/maps/api/geocode/json", {
                params: {
                    address: val,
                    sensor: false
                }
            }).then(function (response){
                $rootScope.results = response.data.results;
                $location.path("/results");
            });
        };

    }

]);
;"use strict";
/**
 * Controller to display results of search in sn.example.
 * @class  ResultsCtrl
 * @module sn.example
 * @author SOON_
 */
angular.module("sn.example").controller("ResultsCtrl", [
    "$scope",
    "$rootScope",
    /**
     * @constructor
     * @param {Object}  $scope
     * @param {Service} $rootScope
     */
    function ($scope, $rootScope) {

        /**
         * The result from the search query
         * @property results
         * @type     {Array}
         */
        $scope.results = $rootScope.results;

    }

]);
