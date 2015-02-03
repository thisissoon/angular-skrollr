"use strict";

describe("snSkrollrProvider", function () {

    var serviceProvider, $window, $document, spy, scope, rootScope, snSkrollr;

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

            $window = $injector.get("$window");
            $window.skrollr = {
                init: function() { return }
            }
            spy = spyOn($window.skrollr, "init");

            $document = $injector.get("$document");
            $document.ready = function(fn){ fn.call(this); }

            snSkrollr = $injector.get("snSkrollr");
        });

    });

    it("should configure snSkrollr with options", function () {
        expect(serviceProvider.config).toEqual({ smoothScrolling: true });
    });

    it("should call skrollr init", function () {

        snSkrollr.init();
        expect(spy).toHaveBeenCalled();
    });

});

describe("directive: snSkrollr", function() {
    var element, scope, isolatedScope, $window, spy;

    beforeEach(module("sn.skrollr"));

    beforeEach(inject(function ($rootScope, $compile, $injector) {
        scope = $rootScope.$new();

        $window = $injector.get("$window");
        $window.skrollr = {
            refresh: function() { return }
        }
        spy = spyOn($window.skrollr, "refresh");

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

