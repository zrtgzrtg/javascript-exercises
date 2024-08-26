const reverseString = function(string) {
    let ret = ""
    const stringArr = string.split("")
    const orgLength = stringArr.length
    for(let i = 0; i<orgLength;i++) {
        console.log(stringArr)
        ret += stringArr.pop()
    }
    return ret
};

// Do not edit below this line
module.exports = reverseString;
