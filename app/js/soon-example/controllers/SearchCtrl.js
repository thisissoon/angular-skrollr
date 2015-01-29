"use strict";
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
