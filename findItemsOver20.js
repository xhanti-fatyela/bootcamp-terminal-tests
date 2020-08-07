module.exports = function (namesAndQty){
    var listNames = []
      for(var i=0;i<namesAndQty.length;i++){
          var listOfFruits = namesAndQty[i];
          if(listOfFruits.qty > 20){
             listNames.push(listOfFruits) 
          }
         
      }
   return listNames
 }