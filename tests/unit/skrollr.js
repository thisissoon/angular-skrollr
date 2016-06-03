"use strict";

describe("snSkrollrProvider", function () {

    var serviceProvider, $window, $document, spy, destroy, scope, rootScope, snSkrollr, refresh, skrollrInstance;

    beforeEach(function () {

        // Initialize the service provider by injecting it to a fake module"s config block
        angular.module("testApp", [])
            .config(function (snSkrollrProvider) {
                snSkrollrProvider.config = { smoothScrolling: true };
                snSkrollrProvider.disableMobile = true;
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
        snSkrollr.init({ smoothScrolling: false });
        expect(spy).toHaveBeenCalledWith({ smoothScrolling: false });
        expect(serviceProvider.hasBeenInitialised).toEqual(true);

        snSkrollr.init();
        expect(spy.calls.argsFor(1)).toEqual([{ smoothScrolling: true }]);
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

    it("should NOT call skrollr init on mobile", function () {

        spy.calls.reset();
        $window.navigator = {
          userAgent: "Android"
        };
        snSkrollr.init();
        expect(spy).not.toHaveBeenCalled();

        spy.calls.reset();
        $window.navigator = {
          userAgent: "iPad"
        };
        snSkrollr.init();
        expect(spy).not.toHaveBeenCalled();

        spy.calls.reset();
        $window.navigator = {
          userAgent: "BlackBerry"
        };
        snSkrollr.init();
        expect(spy).not.toHaveBeenCalled();

        spy.calls.reset();
        $window.navigator = {
          userAgent: "Opera Mini"
        };
        snSkrollr.init();
        expect(spy).not.toHaveBeenCalled();

        spy.calls.reset();
        $window.navigator = {
          userAgent: "IEMobile"
        };
        snSkrollr.init();
        expect(spy).not.toHaveBeenCalled();

    });

});

describe("directive: snSkrollr", function() {
    var element, scope, isolatedScope, snSkrollr, spy, $window, timeout;

    beforeEach(module("sn.skrollr"));

    beforeEach(inject(function ($rootScope, $compile, $injector) {
        scope = $rootScope.$new();

        snSkrollr = $injector.get("snSkrollr");
        spy = spyOn(snSkrollr, "refresh");

        $window = $injector.get("$window");

        timeout = $injector.get("$timeout");

        element =
            "<sn-skrollr>" +
                "<div id=\"elem1\"></div>" +
            "</sn-skrollr>";

        element = $compile(element)(scope);
        scope.$digest();

        timeout.flush();

    }));

    afterEach(function(){
        timeout.verifyNoPendingTasks();
    })

    it("should refresh skrollr", function (){
        expect(spy).toHaveBeenCalled();
    });

    it("should refresh skrollr on resize", function (){
        expect(spy.calls.count()).toBe(1);

        angular.element($window).triggerHandler("resize");
        timeout.flush(200);
        expect(spy.calls.count()).toBe(2);

        angular.element($window).triggerHandler("resize");
        timeout.flush(200);
        expect(spy.calls.count()).toBe(3);
    });

    it("should refresh skrollr on resize", function (){
        expect(spy.calls.count()).toBe(1);
        scope.timer = null;

        angular.element($window).triggerHandler("scroll");
        timeout.flush(200);
        expect(spy.calls.count()).toBe(2);

        angular.element($window).triggerHandler("scroll");
        timeout.flush(200);
        expect(spy.calls.count()).toBe(3);
    });

});

