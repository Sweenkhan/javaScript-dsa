let str =  "ram,shyam,seeta,a,geeta,ji,rahul";
 
function firstCapital(str){ 

    let splitStr = str.split(",");
    let result = [];

    for(let i = 0; i < splitStr.length; i++){ 
        
        if(splitStr.length>1){
            result.push(splitStr[i].substring(0, 1).toUpperCase()+splitStr[i].substring(1))
        }
        else{ 
            result.push(splitStr[i].substring(0, 1).toUpperCase())
        } 
    }
    return result.join(",")
}

console.log(firstCapital(str))
