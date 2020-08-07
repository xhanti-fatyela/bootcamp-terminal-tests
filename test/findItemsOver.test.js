let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe("findItemsOver function", function(){
  
    it ("products that have quantity higher than the threshold.", function() {
        var itemList = [
            {name : 'apples', qty : 10},
            {name : 'pears', qty : 37},
            {name : 'bananas', qty : 27},
            {name : 'apples', qty : 3},
        ];
        var results = [
            {"name":"apples","qty":3}
        ] ;
        assert.equal(0, findItemsOver(itemList));
    });
});