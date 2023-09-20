function findAuthorById(authors, id) {
  const found = authors.find((authors)=> authors.id === id)
return found
}

function findBookById(books, id) {
  let found = books.find((books)=> books.id === id)
  return found
}

//returns an array with two arrays inside all inputted books are present either in the first array or the second array
//first array is books that are currently checked out
//second array are books that have been returned
function partitionBooksByBorrowedStatus(books) {
  let borrowed =[]
  let returned = []
   for (const book of books) {
   const lastCheckout = book.borrows[0]
    if(!lastCheckout.returned) {
borrowed.push(book)
    } else{
      returned.push(book)
    }
   }
return [borrowed, returned]
}
// returns an array of ten or fewer account objects that represent the accounds given by id under borrows
function getBorrowersForBook(book, accounts) {
  const result = book.borrows.map((transaction)=> {
    const accountInfo = accounts.find((account)=> account.id ===transaction.id)
      const newTransaction = {...transaction , ...accountInfo}
      return newTransaction
     })
result.splice(10)
  return result
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
