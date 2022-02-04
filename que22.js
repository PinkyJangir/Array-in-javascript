var mainStr = "the quick brown fox jumped over the lazy dog. the dog slept over the verandah."
var subStr = "over";
var c = mainStr.split(" ");
output="";
for(var i of c){
    if(subStr===i){
        continue
    }
   output=output+i+" "
}
console.log(output);


// what is function
// what is function esperesion 
// type of function
// local varible and global 
// function Decration
// callback

