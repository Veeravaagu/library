let title = document.querySelector('.title');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const h3 = document.querySelector('h3');
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

function addBookToLibrary() {

        submit.addEventListener('click', function (e){
            console.log(e);
            console.log(e.target);
        })
        title.addEventListener('keydown',function test (event){
            h1.innerText += event.key;
            console.log(h1.innerText)
        })
        author.addEventListener('keydown',function test (event){
            p.innerText += event.key;
            console.log(p.innerText)
        })
        pages.addEventListener('keydown',function test (event){
            console.log(event.key)
        })
        read.addEventListener('click',function test (event){
            console.log(event.target.checked)
        })
        
    }
addBookToLibrary() 

