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

    //(book, index) => { ... }: This is the arrow function passed as the callback to forEach.
    //book: Represents the current element (a Book object) being processed in the myLibrary array.
    //index: Represents the index of the current element in the myLibrary array.

    myLibrary.forEach((book,index) => {
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

        //create a div to put a button and a img
        const divForButton = document.createElement('div');
        divForButton.className = 'divForButton';
        card.appendChild(divForButton);

        //create a a modify read-status button
        const modifyButton = document.createElement('button');
        modifyButton.className = 'modifyButton';
        modifyButton.textContent = "Modify Read-Status";
        modifyButton.setAttribute('data-index',index);
        divForButton.appendChild(modifyButton);

        //create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.className ='deleteButton';
        //deleteButton.textContent = 'Delete';
         // Create the icon element
        var icon = document.createElement('i');
        icon.className = 'fas fa-trash-alt';
        // Append the icon to the button
        deleteButton.appendChild(icon);
        deleteButton.setAttribute('data-index', index); // Add data-index attribute to identify the book (the index in the array )and to remove from the array later easily
        divForButton.appendChild(deleteButton);

        

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

//the element you're trying to select does not exist in the DOM at the time your script is being executed. 
//In my case, the deleteBtn element is likely not found because there are no .deleteButton elements when the script runs for the first time.

//Since the delete buttons are created dynamically when books are added to the library, you need to delegate the event listener for the delete buttons. 
//Attach the event listener to the book-container and use event delegation to listen for clicks on delete buttons.
//Ensure that the displayBooks function includes the correct logic to handle the delete action.

document.querySelector('.book-container').addEventListener('click', function (event) {
    //event.target: Refers to the clicked element.
    //event.target.classList.contains('deleteButton'): Checks if the clicked element is a delete button.
    //event.target.parentElement.classList.contains('deleteButton') allow to select the 'i' element
    if (event.target.classList.contains('deleteButton') || event.target.parentElement.classList.contains('deleteButton')) {     
        const index = event.target.getAttribute('data-index');  //event.target.getAttribute('data-index'): Retrieves the value of the data-index attribute from the clicked delete button.
        myLibrary.splice(index, 1); //myLibrary.splice(index, 1): Removes the book at the specified index from the myLibrary array.
        displayBooks(myLibrary);  //displayBooks(myLibrary): Updates the displayed list of books.
   } 
   else if(event.target.classList.contains('modifyButton')) {
    const index = event.target.getAttribute('data-index');
    myLibrary[index].read = myLibrary[index].read === 'read' ? 'not_read' : 'read'; // if statement but shorten
    displayBooks(myLibrary);
    }   
});


/////////////////////////////////////////////////////////////////////////////////


