let books = [];

document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e);
    showbooks();
})

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function removeBook(id) {
    console.log(id);
    books.splice(id, 1);
    showbooks();
}

function showbooks() {
    const bookList = document.getElementById('books');
    if (books.length === 0) {
        bookList.innerHTML = `<div><h3>Oops!</h3><p>Sorry, there are currently no books in the list</p>`;
    } else {
        const booksDiv = books.map((book, index) => `<div><h3>book Number: ${index + 1}</h3>
            <p><strong>Book Name: </strong>${book.name}</p>
            <p><strong>Author Name:</strong> ${book.authorName}</p>
            <p><strong>Book Description:</strong> ${book.bookDescription}</p>
            <p><strong>No. of Pages:</strong> ${book.pagesNumber} page(s)</p>
            <button onclick="removeBook(${index})">Delete</delete></div>`
        );
        bookList.innerHTML = booksDiv.join('');
    }
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}