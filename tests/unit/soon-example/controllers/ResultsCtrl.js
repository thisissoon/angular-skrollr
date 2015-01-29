"use strict";

describe("ResultsCtrl", function (){

    var _scope, _rootScope;

    beforeEach(function(){
        module("sn.example");
    });

    beforeEach(inject(function ($rootScope, $controller) {

        _scope = $rootScope.$new();
        _rootScope = $rootScope;
        _rootScope.results = ["123","456"];

        $controller("ResultsCtrl", {
            $scope: _scope,
            $rootScope: _rootScope
        });

    }));

    it("should attach results to scope ", function (){
        expect(_scope.results).toContain("123");
        expect(_scope.results).toContain("456");
    });


});
