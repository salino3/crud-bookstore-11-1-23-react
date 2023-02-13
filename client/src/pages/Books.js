import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Books = () => {

 const [books, setBooks] = useState([]);


   const fetchAllBooks = async () => {
       try {
         const res = await axios.get("http://localhost:8080/books");
         console.log(res);
         setBooks(res.data);
       } catch (error) {
         console.error(error);
       }
     };

useEffect(() => {
   fetchAllBooks();
}, []);
console.log({books})
//
const handleClick = async(id) => {
  try {
    await axios.delete(`http://localhost:8080/books/${id}`);
          fetchAllBooks();
          alert("Book deleted")
  } catch (error) {
    console.error(error)
  };
};



  return (
    <>
      <div className="divBigger">
        <div className="divTitle">
          <h2>Book store</h2>
          <Link to={"/add"}>
            <button>Add new book</button>
          </Link>{" "}
        </div>
        <div className="divBooks">
          {!books || !books.length
            ? "Loading.."
            : books
                .sort((a, b) => b.id - a.id)
                .map((book) => (
                  <div key={book.id} className="bookList">
                    {book.cover && (
                      <Link to={`/desc/${book.id}`}>
                        <img src={book.cover} alt="book cover" />
                      </Link>
                    )}
                    <div>
                      <h2>{book.title}</h2>
                      <span>{book.price} €</span>
                    </div>
                    <br />
                    <button
                      onClick={() => handleClick(book.id)}
                      className="deleteBtn"
                    >
                      Delete
                    </button>{" "}
                    <Link to={`/update/${book.id}`}>
                      <button className="updateBtn">Update</button>
                    </Link>
                  </div>
                ))}
        </div>
      </div>
    </>
  );
}

export default Books



