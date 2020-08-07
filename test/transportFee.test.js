let assert = require("assert");
let transportFee = require("../transportFee");

describe("transportFee function", function(){
  
    it ("returns the right price based on the shift you are working", function() {
        var shift = 'morning' ;
        assert.equal('R20', transportFee(shift));
    });

    it ("returns the right price based on the shift you are working", function() {
        var shift = 'afternoon' ;
        assert.equal('R10', transportFee(shift));
    });

    it ("returns the right price based on the shift you are working", function() {
        var shift = 'nightshift' ;
        assert.equal('free', transportFee(shift));
    });

});