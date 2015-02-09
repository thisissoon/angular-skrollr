"use strict";

describe("snSkrollrProvider", function () {

    var serviceProvider, $window, $document, spy, destroy, scope, rootScope, snSkrollr, refresh, skrollrInstance;

    beforeEach(function () {

        // Initialize the service provider by injecting it to a fake module"s config block
        angular.module("testApp", function () {})
            .config(function (snSkrollrProvider) {
                snSkrollrProvider.config = { smoothScrolling: true };
                serviceProvider = snSkrollrProvider
            });

        module("sn.skrollr", "testApp");

        inject(function ($rootScope, $injector) {
            scope = $rootScope.$new();
            rootScope = $rootScope;

            snSkrollr = $injector.get("snSkrollr");

            $window = $injector.get("$window");
            $window.skrollr = {
                init: function() {
                    return {
                        refresh: function(){}
                    };
                },
                destroy: function() {}
            }
            spy = spyOn($window.skrollr, "init");
            spy.and.callThrough();

            destroy = spyOn($window.skrollr, "destroy");
            destroy.and.callThrough();

            $document = $injector.get("$document");
            $document.ready = function(fn){ fn.call(this); }

        });

    });

    it("should configure snSkrollr with options", function () {
        expect(serviceProvider.config).toEqual({ smoothScrolling: true });
    });

    it("should call skrollr init", function () {

        snSkrollr.init();
        expect(spy).toHaveBeenCalled();
        expect(serviceProvider.hasBeenInitialised).toEqual(true);
    });

    it("should call skrollr destroy", function () {

        serviceProvider.hasBeenInitialised = true;
        snSkrollr.destroy();
        expect(destroy).toHaveBeenCalled();
        expect(serviceProvider.hasBeenInitialised).toEqual(false);

    });

    it("should not call skrollr destroy if skrollr hasn't been initialised", function () {

        serviceProvider.hasBeenInitialised = false;
        snSkrollr.destroy();
        expect(destroy).not.toHaveBeenCalled();
        expect(serviceProvider.hasBeenInitialised).toEqual(false);

    });

});

describe("directive: snSkrollr", function() {
    var element, scope, isolatedScope, snSkrollr, spy;

    beforeEach(module("sn.skrollr"));

    beforeEach(inject(function ($rootScope, $compile, $injector) {
        scope = $rootScope.$new();

        snSkrollr = $injector.get("snSkrollr");
        snSkrollr.skrollr = {
            refresh: function() { return }
        }
        spy = spyOn(snSkrollr, "refresh");

        element =
            "<sn-skrollr>" +
                "<div id=\"elem1\"></div>" +
            "</sn-skrollr>";

        element = $compile(element)(scope);
        scope.$digest();

    }));

    it("should refresh skrollr", function (){
        expect(spy).toHaveBeenCalled();
    });

});

