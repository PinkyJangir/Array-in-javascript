var n = [19, 17, 12, 17, 17, 18, 10, 17, 14, 12, 19, 17, 12, 13, 11];
var uniqe=[];
var duplicat=[];
for(i of n){
  if(!uniqe.includes(i)){
    uniqe.push(i)
  }
}
console.log(uniqe)
for( k of uniqe){
  var count=0
  for(j of n){
    if(k===j){
      count+=1
    } 
  }
  if(count>1){
      duplicat.push(k)
   
  }
}
console.log(duplicat)
