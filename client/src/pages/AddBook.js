import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const AddBook = () => {

 const [book, setBook] = useState({
   title: "",
   author: "",
   desc: "",
   cover: "",
   price: null,
 });

 const handleChange = (event) => {
    
    setBook({ ...book, [event.target.name]: event.target.value.trim() });
 };

 const handleClick = async (event) => {
  event.preventDefault();

    try { 
     if (book.title.length < 46 && book.author.length < 46 && book.desc.length < 256 && book.cover.length < 256) {
       await axios.post("http://localhost:8080/books", book);
       window.location.href = "/";
     } else {
       alert("Error! Maybe text in a input is too long");
     };
    } catch (error) { 
      console.error(error);
  };
 };

 
  return (
    <>
      <div className="container">
        <div className="divForm">
          <h1>Add New Book</h1>
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
              name="title"
            />{" "}
            <input
              type={"text"}
              placeholder={"Author"}
              required
              onChange={handleChange}
              name="author"
            />
            <small>maximum 255 characters</small>
            <textarea
              type={"text"}
              placeholder={"Description"}
              required
              onChange={handleChange}
              name="desc"
            ></textarea>
            <input
              type={"text"}
              placeholder={"Cover image"}
              required
              onChange={handleChange}
              name="cover"
            />
            <input
              type={"number"}
              placeholder={"Price"}
              required
              onChange={handleChange}
              name="price"
            />
            <button className="formButton" type="submit" onClick={handleClick}>
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddBook