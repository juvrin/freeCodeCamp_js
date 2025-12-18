let books = [{
  title:"Title1",
  authorName:"author1",
  releaseYear:1969
},
{
  title:"Title2",
  authorName:"author2",
  releaseYear:1944
},
{
  title:"Title3",
  authorName:"author3",
  releaseYear:1951
}
]

function sortByYear(book1,book2){
  if (Number(book1.releaseYear) < Number(book2.releaseYear)){
    return -1;
  } else if (Number(book1.releaseYear) > Number(book2.releaseYear)){
    return 1;
  } else {
    return 0;
  };
};


console.log(sortByYear(books[2], books[1]));

const filteredBooks = books.filter((book) => book.releaseYear > 1950);

filteredBooks.sort(sortByYear);

console.log(filteredBooks);


console.log(Number(books[1].releaseYear));