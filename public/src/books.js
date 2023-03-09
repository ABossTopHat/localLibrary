function findAuthorById(authors, id) {
  return authors.find(authorObj => authorObj.id == id)
}

function findBookById(books, id) {
  return books.find(bookObj => bookObj.id == id)
}

function partitionBooksByBorrowedStatus(books) {
  const notReturned = books.filter((bookObj) => {
    const yeet = bookObj.borrows.some(bookObj1 =>  bookObj1.returned === false);
    return yeet;
  });
  const returned = books.filter((bookObj) => {
    const pain = bookObj.borrows.every(bookObj1 => bookObj1.returned === true);
    return pain;
  });

  return [notReturned, returned]
}



function getBorrowersForBook(book, accounts) {
  let yeet = book.borrows.map((checkOut) =>{
  let yeet2 = findAuthorById(accounts, checkOut.id)
 yeet2.returned = checkOut.returned
    return yeet2
  }).slice(0,10);
    return yeet
  }

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
