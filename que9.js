var numbers=[50, 40, 23, 70, 56, 12, 5, 10, 7];
var i=0;
var max=0;
var smax=0
while (i<numbers.length){
    if(numbers[i]>max){
        max=numbers[i];
        var j=0;
        while(j<numbers.length){
            if (max>numbers[j] && smax<numbers[j]){
                smax=numbers[j];
            }
            j++
        }
    }
    i++
}
console.log(max,smax)

