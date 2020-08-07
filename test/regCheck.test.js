let assert = require("assert");
let regCheck = require("../regCheck");

describe('Indicates whether the number plate is from GP,L,EC,MP' , function(){

    it('Registration plate ending with GP should return true' , function(){
        assert.equal(false , regCheck('GP')) ;

    });

    it('Registration plate ending with L should return true' , function(){
        assert.equal(false , regCheck('L')) ;

    });

    it('Registration plate ending with EC should return true' , function(){
        assert.equal(false , regCheck('EC')) ;

    });

    it('Registration plate ending with MP should return true' , function(){
        assert.equal(false , regCheck('MP')) ;

    });

    it('Registration plate ending with CA should return false' , function(){
        assert.equal(false , regCheck('CA')) ;

    });
});