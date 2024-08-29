const fibonacci = function(stringNum) {
    let num = 0
    if(typeof(stringNum) === "string"){
        num = parseInt(stringNum)
    } else {
        num = stringNum
    }
    if(num<0 ){
        return "OOPS"
    }
    if(num === 0) {
        return 0
    }
    if(num === 1) {
        return 1
    }
    return fibonacci(num-1)+fibonacci(num-2)

};

// Do not edit below this line
module.exports = fibonacci;
