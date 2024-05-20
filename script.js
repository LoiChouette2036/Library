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
    const container = document.querySelector("table");
    const card = document.createElement("div");
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





