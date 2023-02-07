function ArrNums(a,b){
    for(var i = 0; i<b.length; i++){
        if(!a.includes(b[i])) a.push(b[i])
    }
    return a
}
module.exports=ArrNums