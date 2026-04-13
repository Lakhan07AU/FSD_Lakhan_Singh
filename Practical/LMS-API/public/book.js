const form = document.getElementById("bookForm");
const list = document.getElementById("bookList");


// ADD BOOK
form.addEventListener("submit",async(e)=>{

e.preventDefault();

const data = {
booktitle: document.getElementById("title").value,
author: document.getElementById("author").value,
publishdate: document.getElementById("date").value,
price: document.getElementById("price").value
};

await fetch("/books",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(data)
});

loadBooks();
form.reset();

});


// LOAD BOOKS
async function loadBooks(){

const res = await fetch("/books");
const books = await res.json();

list.innerHTML="";

books.forEach(book=>{

const li = document.createElement("li");

li.innerHTML = `${book.booktitle} - ${book.author} - ₹${book.price}`;

list.appendChild(li);

});

}

loadBooks();


// SEARCH BOOK
async function searchBook(){

const name = document.getElementById("searchBox").value;

const res = await fetch(`/books/search/${name}`);

const books = await res.json();

list.innerHTML="";

books.forEach(book=>{

const li = document.createElement("li");

li.innerHTML = `${book.booktitle} - ${book.author} - ₹${book.price}`;

list.appendChild(li);

});

}