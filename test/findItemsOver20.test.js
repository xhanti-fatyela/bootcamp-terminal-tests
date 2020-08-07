let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe("findItemsOver20 function", function(){
  
    it ("The function should return all the products that have a quantity higher than 20", function() {
        var x = [
                {name : 'apples', qty : 10},
                {name : 'pears', qty : 37},
                {name : 'bananas', qty : 27},
                {name : 'apples', qty : 3}
       ];
        var results =[
                      {name : 'pears', qty : 37},
                      {name : 'bananas', qty : 27}
    ];
        assert.deepEqual(findItemsOver20(x) ,results);

    });
    
    
});