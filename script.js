const title = document.querySelector('.title');
const submit = document.querySelector('#submit');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.status');

const myLibrary = [];


function Book(title,author,pages,read) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary(title,author,pages,read) {
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook)
    clearDisplay()
    display();
    console.log(myLibrary, newBook);
    }


submit.addEventListener('click', function (e){
    e.preventDefault();
    if (title.value !== '' && author.value !== ''){
    const bookTitle = title.value;
    const authorName = author.value;
    const pagesRead = pages.value;
    const readStatus = read.checked;

    addBookToLibrary(bookTitle,authorName,pagesRead,readStatus)
    } else{
        alert('Fill the Required Fields[Title and Author]')
    }
})

function clearDisplay(){
    title.value = ''
    author.value = ''
    pages.value = '0'
    read.checked = ''
}

function display() {
    const libraryContainer = document.querySelector('.library-container');
  

    libraryContainer.innerHTML = '';
  
    for (const book of myLibrary) {
      const card = document.createElement('div');
      card.classList.add('book-card');
  
      const titleElement = document.createElement('p');
      titleElement.textContent = `Title: ${book.title}`;
      card.appendChild(titleElement);
  
      const authorElement = document.createElement('p');
      authorElement.textContent = `Author: ${book.author}`;
      card.appendChild(authorElement);
  
      const pagesElement = document.createElement('p');
      pagesElement.textContent = `Pages: ${book.pages}`;
      card.appendChild(pagesElement);
  
      const statusElement = document.createElement('p');
      statusElement.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
      card.appendChild(statusElement);
  

  
      libraryContainer.appendChild(card);
    }
  }
  
  

