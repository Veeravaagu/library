// script.js

const title = document.querySelector('.title');
const submit = document.querySelector('#submit');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.status');
const libraryContainer = document.querySelector('.library-container');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  clearDisplay();
  display();
}

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

function clearDisplay() {
  title.value = '';
  author.value = '';
  pages.value = '0';
  read.checked = '';
}

function display() {
  libraryContainer.innerHTML = '';

  for (const book of myLibrary) {
    const card = document.createElement('div');
    card.classList.add('book-card');

    const titleElement = document.createElement('p');
    titleElement.textContent = `Title: ${book.title}`;
    titleElement.classList.add('titleElement');
    card.appendChild(titleElement);

    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${book.author}`;
    authorElement.classList.add('authorElement');
    card.appendChild(authorElement);

    const pagesElement = document.createElement('p');
    pagesElement.textContent = `Pages: ${book.pages}`;
    pagesElement.classList.add('pagesElement');
    card.appendChild(pagesElement);

    const statusElement = document.createElement('p');
    statusElement.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
    statusElement.classList.add('statusElement');
    card.appendChild(statusElement);

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

function deleteCard(card) {
  const index = Array.from(libraryContainer.children).indexOf(card);
  myLibrary.splice(index, 1);
  display(); 
}
