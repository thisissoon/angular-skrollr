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
                        refresh: function(){},
                        destroy: function(){}
                    };
                }
            }
            spy = spyOn($window.skrollr, "init");
            spy.and.callThrough();

            $document = $injector.get("$document");
            $document.ready = function(fn){ fn.call(this); }

        });

    });

    it("should configure snSkrollr with options", function () {
        expect(serviceProvider.config).toEqual({ smoothScrolling: true });
    });

    it("should call skrollr init", function () {
        rootScope.$$phase = true;
        snSkrollr.init();
        expect(spy).toHaveBeenCalledWith({ smoothScrolling: true });
        expect(serviceProvider.hasBeenInitialised).toEqual(true);
    });

    it("should call destroy on skrollr instance", function () {

        snSkrollr.init();
        destroy = spyOn(serviceProvider.skrollrInstance, "destroy");
        snSkrollr.destroy();
        expect(destroy).toHaveBeenCalled();
        expect(serviceProvider.hasBeenInitialised).toEqual(false);

    });

    it("should not call destroy if skrollr hasn't been initialised", function () {

        serviceProvider.hasBeenInitialised = false;
        snSkrollr.destroy();
        expect(serviceProvider.skrollrInstance.destroy).toBe(undefined);
        expect(serviceProvider.hasBeenInitialised).toEqual(false);

    });

    it("should call refresh on skrollr instance", function () {

        snSkrollr.init();
        refresh = spyOn(serviceProvider.skrollrInstance, "refresh");
        snSkrollr.refresh();
        expect(refresh).toHaveBeenCalled();

    });

     it("should NOT call refresh on skrollr instance", function () {

        snSkrollr.init();
        snSkrollr.destroy();
        refresh = spyOn(serviceProvider.skrollrInstance, "refresh");
        snSkrollr.refresh();
        expect(serviceProvider.hasBeenInitialised).toBe(false);
        expect(refresh).not.toHaveBeenCalled();

    });

});

describe("directive: snSkrollr", function() {
    var element, scope, isolatedScope, snSkrollr, spy, timeout;

    beforeEach(module("sn.skrollr"));

    beforeEach(inject(function ($rootScope, $compile, $injector) {
        scope = $rootScope.$new();

        snSkrollr = $injector.get("snSkrollr");
        spy = spyOn(snSkrollr, "refresh");

        timeout = $injector.get("$timeout");

        element =
            "<sn-skrollr>" +
                "<div id=\"elem1\"></div>" +
            "</sn-skrollr>";

        element = $compile(element)(scope);
        scope.$digest();

        timeout.flush();

    }));

    it("should refresh skrollr", function (){
        expect(spy).toHaveBeenCalled();
    });

});

