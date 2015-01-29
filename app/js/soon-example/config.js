"use strict";
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
