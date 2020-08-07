module.exports = function (regNumbers, regNumbersStart){
    var regNumbersSplitted = regNumbers.split(',');
    var paarlHowMany = 0;
    for(var i=0;i<regNumbersSplitted.length;i++){
      var PaarlHM = regNumbersSplitted[i].trim()
       if(PaarlHM.startsWith(regNumbersStart)){
          paarlHowMany++
         
        
      }
       
    } 
   return paarlHowMany
 }