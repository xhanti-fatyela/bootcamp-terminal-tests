module.exports = function (numReg){
    
      var fromPaarl = numReg.split(',');
      var paarlNumber = 0;
      for(var i=0;i<fromPaarl.length;i++){
        var regPaarl = fromPaarl[i].trim()
         if(regPaarl.startsWith('CJ')){
            paarlNumber++
           
          
        }
         
      } 
     return paarlNumber
   }