import React, { useEffect, useState } from 'react';
import './App.css';
import BooksList from './components/BooksList'
import BookSearch from './components/BookSearch'
import getBooks from './services/books/booksService'

function App() {

  const [books, setBooks] = useState([])

  useEffect(function () {
    getBooks()
      .then(books => {
        console.log(books)
        setBooks(books)
      })
  }, [])

  return (
    <div className="App">
      <h1>Mis libros</h1>
      <BookSearch />
      <BooksList books={books} />
    </div>
  );
}

export default App;
