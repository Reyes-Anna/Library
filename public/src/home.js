//returns a number of book objects inside of the array
function getTotalBooksCount(books) {
  return books.length 
}
//returns a number of accounts inside the array
function getTotalAccountsCount(accounts) {
  return accounts.length
}
//returns a number that represents the number of books that are currently checked out of the libray
function getBooksBorrowedCount(books) {
  let count = []
  for (let book of books){
    if(!book.borrows[0].returned){
    count.push(books)
    }
  }
  return count.length
}

function getMostCommonGenres(books) {
const result = books.reduce((result, book) => {
  if (result[book.genre]){
    result[book.genre]+= 1
  } else {
    result[book.genre] = 1
  }
 return result
},{})
let newResult = []
for (let key in result) {
 const genreName = key
 const genreCount = result[key]
newResult.push({name: genreName, count: genreCount})
}
 newResult.sort((genreCountA,genreCountB)=> genreCountB.count - genreCountA.count)
 newResult.splice(5)
 return newResult
}


function getMostPopularBooks(books) {
  const result = books.reduce((result, book) => {
  result[book.title] = book.borrows.length
 return result
},{})
let newResult = []
for (let key in result) {
 const borrows = key
 const borrowsCount = result[key]
newResult.push({name: borrows, count: borrowsCount})
}
 newResult.sort((countA,countB)=> countB.count - countA.count)
 newResult.splice(5)
 return newResult
}

function getMostPopularAuthors(books, authors) {
const authorCounts = [];
  
for (const author of authors) {
let count = 0;

for (const book of books) {
if (book.authorId === author.id) {
count += book.borrows.length;
}
} 
 authorCounts.push({ name: `${author.name.first} ${author.name.last}`, count });
}
  const sortedAuthors = authorCounts.sort((a, b) => b.count - a.count).slice(0, 5)
  const result = sortedAuthors.map((author) => ({ name: author.name, count: author.count }));
  return result
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
