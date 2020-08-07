let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe("years ago fuction", function(){
  
    it ("should return how many years ago it was", function() {
        assert.equal(44, yearsAgo('1976'));
    });

    it ("should return how many years ago it was", function() {
        assert.equal(21, yearsAgo('1999'));
    });

    it ("should return how many years ago it was", function() {
        assert.equal(57, yearsAgo('1963'));
    });
});