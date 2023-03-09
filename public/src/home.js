function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  const real = books.filter(bookObj => bookObj.borrows.some(borrowsObj => borrowsObj.returned === false))
return real.length
}

function _sortObj(obj) {
  const keys = Object.keys(obj);
  return keys.sort((firstKey, secondKey) => {
    if(obj[firstKey] > obj[secondKey]) {
      return -1;
    } else if(obj[firstKey] < obj[secondKey]) {
      return 1;
    } else {
      return 0;
    };
  });
};

function getMostCommonGenres(books) {
  const count = books.reduce((book, {genre})=>{
    if (book[genre]){
      book[genre] += 1
    } 
    else {
      book[genre] = 1
    }
    return book
  }, {})
  const sorted =  _sortObj(count)
  return sorted.map((name) => ({
    name,
    count: count[name], 
  })).slice(0,5)
}


function getMostPopularBooks(books) {
  result = []
  books.forEach((bookObj)=>(
    result.push({
    name: bookObj.title,
    count: bookObj.borrows.length
  })))
  return result.sort((resultA,resultB)=> (resultA.count < resultB.count ? 1:-1)).slice(0,5)
}

function getMostPopularAuthors(books, authors) {
  result = []
  authors.forEach((authorObj)=>{
    counter = 0
    books.forEach((bookObj)=>{
      if (bookObj.authorId === authorObj.id){
        counter += bookObj.borrows.length
        }
      })
      result.push({
        name: authorObj.name.first + " " + authorObj.name.last,
        count: counter
      })
      })
      return result.sort((resultA,resultB)=> (resultA.count < resultB.count ? 1:-1)).slice(0,5)
    }
  

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
