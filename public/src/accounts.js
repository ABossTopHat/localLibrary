function findAccountById(accounts, id) {
return accounts.find(accountObj => accountObj.id == id)
}
function sortAccountsByLastName(accounts) {
return accounts.sort((accountObj1, accountObj2) => accountObj1.name.last > accountObj2.name.last ? 1:-1)
}

function getTotalNumberOfBorrows(account, books) {
let total = 0
books.forEach(bookObj => {
  bookObj.borrows.forEach((borrowsObj)=>{
    if (borrowsObj.id === account.id){
      total++
    }
  })
  }
)
return total
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = []
  books.forEach(bookObj => {
    bookObj.borrows.forEach(borrowsObj => {
      if (borrowsObj.id === account.id){
        if (borrowsObj.returned === false){
         authors.forEach(authorObj => {
          if (authorObj.id === bookObj.authorId){
            bookObj.author = authorObj
            result.push(bookObj)
          }
         })
        }
      }
    })
  })
return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
