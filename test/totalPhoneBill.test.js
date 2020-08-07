let assert = require("assert");
let totalPhoneBill = require("../totalPhoneBill");

describe("Total phone bill function", function(){
  
    it ("should return total phone bill", function() {
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it ("should return total phone bill", function() {
        assert.equal('R9.55', totalPhoneBill('call, call, call, sms, sms'));
    });

    it ("should return total phone bill", function() {
        assert.equal('R3.25', totalPhoneBill('sms, sms, sms, sms, sms'));
    });
});