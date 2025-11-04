import React, { useState } from "react";

function App() {
  const [books, setBooks] = useState([
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  const handleAddBook = (e) => {
    e.preventDefault();
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({ title: "", author: "" });
    } else {
      alert("Please fill in both title and author fields!");
    }
  };

  const handleRemoveBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>📚 Library Management System</h1>

      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBox}
      />

      <form onSubmit={handleAddBook} style={styles.form}>
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          style={styles.input}
        />
        <button type="submit" style={styles.addButton}>
          Add Book
        </button>
      </form>

      <ul style={styles.bookList}>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <li key={index} style={styles.bookItem}>
              <span>
                <strong>{book.title}</strong> by {book.author}
              </span>
              <button
                onClick={() => handleRemoveBook(index)}
                style={styles.removeButton}
              >
                Remove
              </button>
            </li>
          ))
        ) : (
          <p style={styles.noBooks}>No books found!</p>
        )}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    maxWidth: "600px",
    margin: "50px auto",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  heading: { color: "#333" },
  searchBox: {
    padding: "10px",
    width: "80%",
    marginBottom: "20px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  form: { marginBottom: "20px" },
  input: {
    padding: "10px",
    margin: "5px",
    width: "40%",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "10px 15px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  bookList: { listStyle: "none", padding: 0 },
  bookItem: {
    backgroundColor: "#fff",
    margin: "10px 0",
    padding: "10px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  removeButton: {
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
  noBooks: { color: "gray" },
};

export default App;
