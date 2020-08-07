let assert = require("assert");
let isWeekday = require("../isWeekday");

describe("The isWeekday function ", function(){
  
    it ("should say that Monday is a weekday", function() {
        assert.equal(true, isWeekday('Monday'));
    });

    it ("should say that Monday is a weekday", function() {
        assert.equal(isWeekday('Saturday'), false);
    });
});