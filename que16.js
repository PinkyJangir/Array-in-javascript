var num = [23, 14, 56, 12, 19, 9, 15, 25, 31, 42, 43];
var sum=0
var esum=0;
for(i of num){
    if(i%2==0){
        sum+=1
    }else{
        esum+=1
    }
}
console.log(sum+esum/2)

