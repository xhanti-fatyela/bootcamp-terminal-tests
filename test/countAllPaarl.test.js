let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");


describe("counts how many registration numbers are from Paarl", function(){
  
    it (" returns the number of registration numbers in Paarl", function() {
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

    it (" returns the number of registration numbers in Paarl", function() {
        assert.equal(5, countAllPaarl('CJ 345 123, CJ 2345, CJ 123-546, CJ 345, CJ 123'));
    });

    it (" returns the number of registration numbers in Paarl", function() {
        assert.equal(1, countAllPaarl('CA 345 123, CA 2345, CL 123-546, CA 345, CJ 123'));
    });
});