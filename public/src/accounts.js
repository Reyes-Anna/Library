function findAccountById(accounts, id) {
  const result = accounts.find((accounts)=> accounts.id === id)
    return result
  }
  function sortAccountsByLastName(accounts) {
  accounts.sort((accountsA,accountsB)=> accountsA.name.last >accountsB.name.last? 1 : -1)
    return accounts
  }
  
  //two parameter account and books array
  //returns number of times that account id appears in borrowers array
  //you are counting
  function getTotalNumberOfBorrows(account, books) {
    let count = []
      const person = account.id
      for (let name in books) {
       const book = books[name].borrows
       for (let name in book) {
         const id = book[name].id
       if (person === id) count.push(id)
       }
    }
    return count.length
  }
  //returns an array of book objects with author info nested of all books borrowed by that account
  function getBooksPossessedByAccount(account, books, authors) {
  let booksPossessed = books.filter((book) => book.borrows[0].returned === false && book.borrows[0].id === account.id)
     let bookDetails = booksPossessed.map((detail) => ({
      ...detail, author :authors.find((author) => author.id === detail.authorId)
    }));
    return bookDetails
  }

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
