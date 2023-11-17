const title = document.querySelector('.title');
const submit = document.querySelector('#submit');
const author = document.querySelector('.author');
const pages = document.querySelector('.pages');
const read = document.querySelector('.status');

console.log(title);

const myLibrary = [];


function Book(title,author,pages,read) {
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

function addBookToLibrary() {

        submit.addEventListener('click', function (e){
            e.preventDefault();
            const bookTitle = title.value;
            const authorName = author.value;
            const pagesRead = pages.value;
            const readStatus = read.value;

            console.log(bookTitle);
            console.log(authorName);
            console.log(pagesRead);
            console.log(readStatus);
        })
    }
addBookToLibrary() 

