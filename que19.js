var how_many_dhan = [3000, 600000, 324990909, 90990900, 30000, 5600000, 690909090, 31010101, 532010, 510, 4100]
var crore=0
var lakhpati=0
var dilwala=0
for (i of how_many_dhan ){
    if(i>=10000000){
        crore+=1
    }else if (i>=100000){
        lakhpati+=1
    }else{
        dilwala+=1
    }
}
console.log(crore)
console.log(lakhpati)
console.log(dilwala)
