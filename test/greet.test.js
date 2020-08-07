let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Liya', function(){
        assert.equal('Hello, Liya', greet('Liya'));
    });
    it('should greet Thimna', function(){
       
        assert.equal('Hello, Thimna', greet('Thimna'));
    });
});