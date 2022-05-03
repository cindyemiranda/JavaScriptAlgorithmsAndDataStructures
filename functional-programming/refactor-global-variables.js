// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(newBookList, bookName) {
  const _newBookList=[...newBookList];
  _newBookList.push(bookName);
  return _newBookList;
  
  // Change code above this line
}

// Change code below this line
function remove(newBookList, bookName) {
  const _newBookList=[...newBookList];
  const book_index = _newBookList.indexOf(bookName);
  if (book_index >= 0) {
    _newBookList.splice(book_index, 1);
    return _newBookList;

    // Change code above this line
    }
}

add(bookList,"A Brief History of Time");
console.log(bookList);