module.exports = function (dayMostProfDep){
    var profit = 0
    var profitDeprtment = ''
      for(var i=0;i<dayMostProfDep.length;i++){ 
          var listOfProf = dayMostProfDep[i];
          if(listOfProf.sales > profit){
             profit = listOfProf.sales
            profitDeprtment = listOfProf.department  
          }
      
      }
   return profitDeprtment
 }