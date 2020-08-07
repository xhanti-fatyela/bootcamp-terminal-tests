module.exports = function (listNameQty, QtyAvail){
    var higher = []
    for(var i=0;i<listNameQty.length;i++){
       var lower = listNameQty[i]; 
       if(lower.qty > QtyAvail){
          higher.push(lower) 

}
    }
return higher
}