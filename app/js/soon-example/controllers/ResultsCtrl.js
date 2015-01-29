"use strict";
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
