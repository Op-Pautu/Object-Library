let myLibrary = [];

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function() {
    return `${title} by ${author}, ${pages}, ${status}`
  }
}

 // Adding a new book to the array
function addBookToLibrary() {
  // do stuff here

}

// const addBook = document.querySelector('.add-book');

// addBook.addEventListener("mouseover", function () {
//   this.style.backgroundColor = 'grey';
// } )

// addBook.addEventListener("mouseout", function () {
//   this.style.backgroundColor = 'rgba(97, 95, 95, 0.144)';
// } )