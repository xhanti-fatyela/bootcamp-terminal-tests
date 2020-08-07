let assert = require("assert");
let fromWhere = require("../fromWhere");

describe("fromWhere function", function(){
  
    it ("returns the town the car is from", function() {
        assert.equal('Bellville', fromWhere('CY'));
    });

    it ("returns the town the car is from", function() {
        assert.equal('Paarl', fromWhere('CJ'));
    });

    it ("returns the town the car is from", function() {
        assert.equal('Cape Town', fromWhere('CA'));
    });

    it ("returns the town the car is from", function() {
        assert.equal('Some other place!', fromWhere('CK'));
    });
});