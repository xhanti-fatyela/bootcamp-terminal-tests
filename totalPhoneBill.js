module.exports = function (callsAndsmsMade){   
    var callNsms = callsAndsmsMade.split(', ');
    var totalVAlues = 0;
    for(var i=0;i<callNsms.length;i++){
      var calculateCallsNsms = callNsms[i].trim()
      
        if(calculateCallsNsms === "call"){
           totalVAlues += 2.75;   
   }else {
      totalVAlues += 0.65;    
     }
   }
   return 'R' + totalVAlues.toFixed(2)
 }