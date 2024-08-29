const getTheTitles = function(books) {
    const titlesOfBooks = books.map(book => book.title) 
    return Array.from(titlesOfBooks)

};

// Do not edit below this line
module.exports = getTheTitles;
