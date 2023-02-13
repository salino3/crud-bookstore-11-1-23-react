import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const UpdateBook = () => {

  const location = useLocation();
  // console.log(location.pathname.split('/')[2]);
  const bookId = location.pathname.split("/")[2];

  const [getBook, setGetBook] = useState({
    title: "",
    author: "",
    desc: "",
    cover: "",
    price: 0,
  });

     const fetchAllBooks = async () => {
       try {
         const res = await axios.get("http://localhost:8080/books/" + bookId);
         console.log(res);
         setGetBook(res.data);
       } catch (error) {
         console.error(error);
       }
     };

     useEffect(() => {
   fetchAllBooks();
     }, []);
     

  const handleChange = (event) => {
    setGetBook({ ...getBook, [event.target.name]: event.target.value });
  };


  const handleClick = async (event) => {
    event.preventDefault();
    try {
     if (getBook.title.length < 46 && getBook.author.length < 46 && getBook.desc.length < 256 && getBook.cover.length < 256) {
      await axios.put("http://localhost:8080/books/" + bookId, getBook);
      window.location.href = "/";
          }else {
                      alert("Error! Maybe text in a input is too long");
               };
    } catch (error) {
      console.error(error);
    };
  };

  return (
    <>
      <div class="container">
        <div className="divForm">
          <h1>Update the Book</h1>
          <Link to={"/"}>
            <b>Go back</b>
          </Link>
          <br />
          <br />
          <form onSubmit={handleClick}>
            <small>maximum 45 characters</small>
            <input
              type={"text"}
              placeholder={"Title"}
              required
              onChange={handleChange}
              value={getBook.title}
              name="title"
            />{" "}
            <input
              type={"text"}
              placeholder={"Author"}
              required
              onChange={handleChange}
              value={getBook.author}
              name="author"
            />{" "}
            <small>maximum 255 characters</small>
            <textarea
              type={"text"}
              placeholder={"Description"}
              required
              onChange={handleChange}
              value={getBook.desc}
              maxlength="255"
              name="desc"
            ></textarea>
            <input
              type={"text"}
              placeholder={"Cover image"}
              required
              onChange={handleChange}
              value={getBook.cover.trim()}
              name="cover"
            />{" "}
            <input
              type={"number"}
              placeholder={"Price"}
              required
              onChange={handleChange}
              value={getBook.price}
              name="price"
            />
            <br />
            <button className="formButton" type="submit">
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateBook;















