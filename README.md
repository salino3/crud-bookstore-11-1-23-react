# Getting Started 

For start with this project you must fill the data in the index.js in backend and text 
in the 'mysql.createConnection( ...' your database password and username. Then in MySQL you need to create a database that i called test_test, and use this SQL code:

# SQL code

use test_test;

CREATE TABLE `test_test`.`books` (
  `id` INT NOT NULL auto_increment,
  `title` VARCHAR(45) NOT NULL,
  `author` VARCHAR(45) NOT NULL,
  `desc` VARCHAR(255) NOT NULL ,
  `cover` VARCHAR(255) NOT NULL ,
  `price` INT NOT NULL,
  PRIMARY KEY (`id`));

  SELECT * FROM test_test.books;

#

After that in the terminal move on backend folder and use the command 'npm start', after that open another terminal move on the client folder and use the command 'npm start'.


## Project Description

This project is a web Page where you can add some books with some information about them, on the top there is a button for move on another page and fill the form adding a new book, after you can see the books you added, you have two buttons for every book, one for delete it and one for update the informations, if you click on the book image you will be redirected in another page for see all informations about that book









