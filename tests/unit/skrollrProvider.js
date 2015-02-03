"use strict";

describe("snSkrollrProvider", function () {

    var serviceProvider, _window;

    beforeEach(function () {

        // Initialize the service provider by injecting it to a fake module"s config block
        angular.module("testApp", function () {})
            .config(function (snSkrollrProvider) {
                snSkrollrProvider.config = { smoothScrolling: true };
                serviceProvider = snSkrollrProvider
            });

        module("sn.skrollr", "testApp");

        // Initialize myApp injector
        inject(function () {});
    })

    it("should configure snSkrollr with options", function () {
        expect(serviceProvider.config).toEqual({ smoothScrolling: true });
    });

});
