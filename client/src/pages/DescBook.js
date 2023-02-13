import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const DescBook = () => {

  const {id} = useParams();


  
  const [book, setBook] = useState({});

  const fetchAllBooks = async () => {
    try {
      const res = await axios.get("http://localhost:8080/books/" + id);
      // console.log(res);
      setBook(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllBooks();
  }, []);

  return (
    <>
      <div>
        <h1>Description Book</h1>
        <Link to={"/"}>
          <b>Go back</b>
        </Link>
        <br />
        <br />
        <div className="divDescPage">
          <div className="divImgDesc">
          <h2>{book.author}</h2>
            <img src={book.cover} alt="book cover" />
          </div>
          <div className="divDesc">
            <div className="titlePrice">
              <h2>{book.title}</h2> <h4>price: {book.price} €</h4>
            </div>
            <div className="divDesc2">
              <h4>{book.desc}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DescBook