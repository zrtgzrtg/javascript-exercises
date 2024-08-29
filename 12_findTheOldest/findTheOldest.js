const findTheOldest = function(objArray) {
    const currentYear = new Date().getFullYear()
    const yearOfBirthArray = objArray.map(person => person.yearOfBirth)
    const yearofDeathArray = objArray.map(person => person.yearOfDeath)
    const yearofDeathArrayFiltered = yearofDeathArray.map(year => {
        if(year === undefined) {
            return currentYear
        } else {
            return year
        }
    })
    console.log(yearofDeathArray)
    console.log(yearOfBirthArray)
    console.log(yearofDeathArrayFiltered)
    const ageArray = []
    for(let i = 0; i<yearofDeathArrayFiltered.length;i++) 
    {
        ageArray[i] = yearofDeathArrayFiltered[i] - yearOfBirthArray[i]
    }
    let oldestPersonAge = Math.max(...ageArray)
    console.log(ageArray)
    const oldestIndex = ageArray.findIndex(personAge => personAge === oldestPersonAge)
    return objArray.at(oldestIndex)

};

// Do not edit below this line
module.exports = findTheOldest;
