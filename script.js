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
    const container = document.querySelector('.book-container'); //important ! select the class !!
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
        author.textContent = 'Author: '+book.author;
        card.appendChild(author);

        //Create and append pages
        const pages = document.createElement('p');
        pages.textContent = 'Pages: '+ book.pages;
        card.appendChild(pages);

        //Create and append read
        const read = document.createElement('p');
        read.textContent = 'Status: '+book.read;
        card.appendChild(read);

        //create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.className ='deleteButton';
        deleteButton.textContent = 'Delete';
        card.appendChild(deleteButton);
        

        //Append card to container
        container.appendChild(card);
    });  
}


////////////////////////////////////////////////////////////////////////////////

const dialog = document.querySelector("dialog");
const btn = document.querySelector("#add-button");

document.getElementById('user-input').addEventListener('submit', function(event){
    event.preventDefault();
    
    //get the values from the form inputs
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let readStatus = document.querySelector('input[name="read-status"]:checked').value;
    
    let book = new Book (title,author,pages,readStatus);
         
    //Put inside the Array
    myLibrary.push(book);
    displayBooks(myLibrary);

    // Reset form and close dialog
    //readStatus = ''; //to not add something on readStatus;
    this.reset();  //really important for not repeating the previous book
    dialog.close();
});

btn.addEventListener("click", () => {
    dialog.showModal();
});


///////////////////////////////////////////////////////////////////////////////////

const deleteBtn = document.querySelector(".deleteButton");
deleteBtn.addEventListener('click',function(event){
    alert('test if it s working');
})

