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


displayBooks(myLibrary){

}


function addBookTolibrary(userTitle, userAuthor, userPages,userRead){
    const book = new Book(userTitle, userAuthor,userPages,userRead);
    myLibrary.push(book);
    displayBooks()
}

//test of the constructor 
const book1 = new Book('empire of north','kawagaha mahito', 235, "not read");
console.log(book1.info());




