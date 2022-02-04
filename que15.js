var  num = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var osum=0;
var esum=0;
for (i of num){
    if(i%2==0){
        esum+=1
    }else{
        osum+=1
    }
}
console.log("even",esum)
console.log("odd",osum)

