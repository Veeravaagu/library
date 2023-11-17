// script.js

// DOM elements
const title = document.querySelector('.title');
const submit = document.querySelector('#submit');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.status');
const libraryContainer = document.querySelector('.library-container');

// Array to store book objects
const myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add a book to the library
function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  clearDisplay();
  display();
}

// Event listener for the submit button
submit.addEventListener('click', function (e) {
  e.preventDefault();
  if (title.value !== '' && author.value !== '') {
    const bookTitle = title.value;
    const authorName = author.value;
    const pagesRead = pages.value;
    const readStatus = read.checked;

    addBookToLibrary(bookTitle, authorName, pagesRead, readStatus);
  } else {
    alert('Fill the Required Fields[Title and Author]');
  }
});

// Function to clear the form input fields
function clearDisplay() {
  title.value = '';
  author.value = '';
  pages.value = '0';
  read.checked = '';
}

// Function to display books in the library
function display() {
  libraryContainer.innerHTML = '';

  for (const book of myLibrary) {
    const card = document.createElement('div');
    card.classList.add('book-card');

    // Title
    const titleElement = document.createElement('p');
    titleElement.textContent = `Title: ${book.title}`;
    titleElement.classList.add('titleElement');
    card.appendChild(titleElement);

    // Author
    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${book.author}`;
    authorElement.classList.add('authorElement');
    card.appendChild(authorElement);

    // Pages
    const pagesElement = document.createElement('p');
    pagesElement.textContent = `Pages: ${book.pages}`;
    pagesElement.classList.add('pagesElement');
    card.appendChild(pagesElement);

    // Read status
    const statusElement = document.createElement('p');
    statusElement.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
    statusElement.classList.add('statusElement');
    card.appendChild(statusElement);

    // Delete button
    const deleteButtonContainer = document.createElement('div');
    deleteButtonContainer.classList.add('deleteButtonContainer');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '×';
    deleteButton.classList.add('deleteButton');
    deleteButton.addEventListener('click', function () {
      deleteCard(card);
    });

    deleteButtonContainer.appendChild(deleteButton);
    card.appendChild(deleteButtonContainer);

    libraryContainer.appendChild(card);
  }
}

// Function to delete a book card
function deleteCard(card) {
  const index = Array.from(libraryContainer.children).indexOf(card);
  myLibrary.splice(index, 1);
  display();
}
