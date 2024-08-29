const palindromes = function (paliString) {
    const validSymbols = "qwertzuioplkjhgfdsayxcvbnm1234567890"
    let myCaseInsensetiveString = paliString.toLowerCase()
    let myFilteredArray = myCaseInsensetiveString.split("").filter(symbol => validSymbols.includes(symbol))
    let myCompleteString = myFilteredArray.join("")

    return myCompleteString === myCompleteString.split("").reverse().join("")

};

// Do not edit below this line
module.exports = palindromes;
