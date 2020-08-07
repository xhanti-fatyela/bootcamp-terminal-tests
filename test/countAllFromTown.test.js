let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe("Counts how many from a town", function(){
  
    it ("return number registration numbers that is for that town.", function() {
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341', 'CL'));
    });

    it ("return number registration numbers that is for that town.", function() {
        assert.equal(4, countAllFromTown('CL 124,CY 567,CL 345, CL 456,CL 341', 'CL'));
    });

    it ("return number registration numbers that is for that town.", function() {
        assert.equal(2, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CA 341', 'CL'));
    });
});