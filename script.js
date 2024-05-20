const myLibrary = [];

//the constructor
function Book (title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return "The " + title + " by " + author +", " + pages + " pages, " + read ;
    }
}

////////////////////////////////////////////////////////////////////////////////////

function displayBooks(myLibrary){
    // selects the #container div
    const container = document.querySelector('.book-container');
    container.innerHTML = ''; // Clear any existing content

    myLibrary.forEach(book => {
        //create card element
        const card = document.createElement('div');
        card.className= 'book-card';

        //Create and append title
        const title = document.createElement('h3')
        title.textContent = book.title;
        card.appendChild(title);

        //Create and append author
        const author = document.createElement('p');
        author.textContent = 'Author: ${book.author}';
        card.appendChild(author);

        //Create and append pages
        const pages = document.createElement('p');
        pages.textContent = 'Pages: ${book.pages}';
        card.appendChild(pages);

        //Create and append read
        const read = document.createElement('p');
        read.textContent = 'Status: ${book.read}';
        card.appendChild(read);
        

        //Append card to container
        container.appendChild(card);
    });  
}

//////////////////////////////////////////////////////////////////////////////////

function addBookTolibrary(userTitle, userAuthor, userPages,userRead){
    const book = new Book(userTitle, userAuthor,userPages,userRead);
    myLibrary.push(book);
    displayBooks()
}

////////////////////////////////////////////////////////////////////////////////

//test of the constructor 
var book1 = new Book("1984", "George Orwell", 328, "not read");
var book2 = new Book("Le Petit Prince", "Antoine de Saint-Exupéry", 96, "read");
var book3 = new Book("To Kill a Mockingbird", "Harper Lee", 281, "read");
var book4 = new Book("Pride and Prejudice", "Jane Austen", 432, "not read");
myLibrary.push(book1,book2,book3,book4);
myLibrary.forEach((book)=> {
    console.log(book.title);
})

//////////////////////////////////////////////////////////////////////////////////
// Call the function to display books on page load
document.addEventListener('DOMContentLoaded', () => {
    displayBooks(myLibrary);
});

