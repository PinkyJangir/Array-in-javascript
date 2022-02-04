var Name=['m','a','l','a','y','a','l','a','m'];
var new_array=[];
for (var i=Name.length-1; i>=0;i--){
   new_array.push(Name[i]);
}
var count=0;
for (var j=0; j<new_array.length;j++  ){
     if (new_array[j]===Name[j]){
       count++;
   }
}
if(count===Name.length){
   console.log("its palindrome");
}else{
   console.log("its not a palindrome");
}