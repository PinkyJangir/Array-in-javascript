var n = [10, 11, 12, 13, 14, 17, 18, 19];
var num=30;
b=[]
for(i of n){
    for (j of n){
        if (i+j===num){
            b.push([i,j])
        }
    }
}
console.log(b)
