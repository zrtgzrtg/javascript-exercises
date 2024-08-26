const removeFromArray = function(array, ...remArray) {
    const filtArray = []
    for(let i = 0; i<array.length;i++){
        if(remArray.includes(array[i])){
            filtArray.push(undefined)
        }else {

        filtArray.push(array[i])
        }
        console.log(filtArray)
    }
    console.log(filtArray)
    let retArray = []
    filtArray.forEach(element => {
        
        if(element !==undefined){
            retArray.push(element) 
        }
    });
    return retArray
};

// Do not edit below this line
module.exports = removeFromArray;
