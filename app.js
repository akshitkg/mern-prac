const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
// add router in express app
app.use("/",router);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get("/",(req, res) => {
  res.sendFile(__dirname +'/index.html');
});

let books = [
  {
    "id": 1,
    "name": "one",
    "author": "two",
  },
  {
    "id": 2,
    "name": "three",
    "author": "four",
  },
  {
    "id": 3,
    "name": "five",
    "author": "six",
  },
];

app.get("/books", (req, res) => {
    res.send(books)
})

app.post("/books", (req, res) => {
  const book={
    "id": 4,
    "name": "abs",
    "author": "def"
};
  //res.end(JSON.stringify(book));
  books.push(book);
  //res.status(200).send('Book adaded successfully!');
  //res.send('Book added successfully');
  res.send(books);
});

// // app.post("/books", (req, res) => {
//   console.log("testing");
//     const book={
//         "id": 4,
//         "name": "abs",
//         "author": "def"
//     };
//     res.end(JSON.stringify(book));
//     books.push(book);
//     res.status(200).send('Book adaded successfully!');
//     res.send('Book added successfully');
// // });

const port=process.env.PORT || 3000; //
app.listen(port, (req, res)=>console.log(`Listening on port ${port}`))