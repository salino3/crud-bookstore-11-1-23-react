// npm i express mysql nodemon
// npm i cors
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';


const app = express();
app.use(cors());

const db = mysql.createConnection({
    host:"localhost",
    user: "",
    password: "",
    database: "test_test",
    port: 3306
}); 

app.use(express.json());


//* GET /
app.get('/', (req, res) => {
    res.json('Hello from backend!');
});


//* GET /books
app.get('/books', (req, res ) => {
    const q = 'SELECT * FROM books'
    if(res){
      db.query(q, (err, data) => {
        if (err) {
            return res.json(err)
        }else{
            return res.json(data);
        };
    });
  };
});

//* GET /books/:id
app.get("/books/:id", (req, res) => {
  const q = "SELECT * FROM books WHERE id = ?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (data.length === 0) {
      return res.status(404).json({ error: "Book not found" });
    }
    return res.json(data[0]);
  });
});



//* POST /books
app.post('/books', (req, res) => {
    const q =
      "INSERT INTO books (`title`,`author`, `desc`, `cover`, `price`) VALUES (?)";
   const values = [
     req.body.title,
     req.body.author,
     req.body.desc,
     req.body.cover,
     req.body.price,
   ];
   try {
    
     db.query(q, [values], (err, data) => {

         if (err) return res.json(err);
         res.json("Book has been created sussefully");
         
       });
   } catch (error) {
    console.error(error);
        alert("Book not saved, maybe texts too long");

   };
});

//* DELETE /books/:id
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE from books WHERE id = ?";
  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    res.json("Book has been deleted sussefully");
  });
});


//* PUT /books/:id
app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q =
    "UPDATE books SET `title` = ?, `author` = ?, `desc` = ?, `cover` = ?, `price` = ? WHERE id = ?";
   const values = [
     req.body.title,
     req.body.author,
     req.body.desc,
     req.body.cover,
     req.body.price,
   ]; 
  
  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    res.json("Book has been updated sussefully");
  });
});


app.listen(8080, () => {
    console.log( 'Connected to backend on port 8080');
}); 
 

 

