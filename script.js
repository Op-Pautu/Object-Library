let myLibrary = [];

function Book(title, author, pages, status) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages}, ${status}`
  }
}


function addBookToLibrary() {
  // do stuff here

}