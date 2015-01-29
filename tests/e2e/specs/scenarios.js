"use strict";

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe("sn.example", function() {

    describe("search", function() {

        beforeEach(function(){
            browser.manage().deleteAllCookies();
            browser.get("http://127.0.0.1:8000/");
            browser.waitForAngular();
            browser.driver.sleep(2000);
        });

        it("should automatically redirect to / when location hash/fragment is empty", function() {
            expect(browser.getLocationAbsUrl()).toMatch("/");
        });

        it("should render home partial when user navigates to /", function() {
            expect(element.all(by.css("ng-view h1")).first().getText()).toContain("Search");
        });

        it("should search for location", function() {
            element(by.model("location")).sendKeys("London");
            element(by.id("submit")).click();

            browser.driver.sleep(5000);

            browser.driver.wait(function() {
                return browser.driver.getCurrentUrl().then(function (url) {
                    return /results/.test(url);
                });
            });
            expect(browser.getLocationAbsUrl()).toMatch("/results");
            expect(element.all(by.repeater("result in results")).count()).toEqual(4);
        });

    });


    describe("results", function() {

        beforeEach(function(){
            browser.get("http://127.0.0.1:8000/results");
            browser.waitForAngular();
            browser.driver.sleep(2000);
        });

        it("should render results page view", function() {
            expect(element.all(by.css("ng-view h1")).first().getText()).toContain("Results");
            expect(element(by.css(".bg-info")).getText()).toContain("No search results");

        });

        it("should go back to search page view", function() {
            element(by.css("a.home")).click();

            browser.driver.wait(function() {
                return browser.driver.getCurrentUrl().then(function (url) {
                    return /\//.test(url);
                });
            });

            expect(browser.getLocationAbsUrl()).toMatch("/");

        });

    });

});
