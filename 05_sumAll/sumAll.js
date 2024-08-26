const sumAll = function(start, end) {
    let ret = 0
    let start1 = 0
    let end1 = 0
    if(typeof start !== "number" || typeof start !== "number"){
        return "ERROR"
    }
    if(Math.floor(start) !== start || Math.floor(end) !== end) {
        return "ERROR"
    }
    if(start <0 || end < 0) {
        return "ERROR"
    }
    if(start > end) {
        start1 = end
        end1 = start
    } else {
        start1 = start
        end1 = end
    }
    console.log(start1)
    console.log(end1)
    for(start1;start1<=end1;start1++) {
        ret += start1
    }
    return ret

};

// Do not edit below this line
module.exports = sumAll;
