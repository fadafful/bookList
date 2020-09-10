const express = require('express');
const router = express.Router();
const db =  require('../db');

// Get all books
router.get('/books', async (req, res) => {
    try{
        let results = await db.allBooks();
        res.json(results);
    }catch(e){
        console.log(e);
        res.status(500);
    }
});

// Get a particular book by id
router.get('/book/:id', async (req,res) => {
    try{
        let result = await db.getBook(req.params.id);
         res.json(result).status(200);
    }catch(e){
        console.log(e);
        res.status(500);
    }
})

// Get all authors
router.get('/authors', async (req, res) => {
    try{
        let results = await db.allAuthors();
         res.json(results);
    }catch(e){
        console.log(e);
        res.status(500);
    }
});

// Get a particular author by id
router.get('/author/:id', async (req,res) => {
    try{
        let result = await db.getAuthor(req.params.id);
         res.json(result).status(200);
    }catch(e){
        console.log(e);
        res.status(500);
    }
})

// Add a new book
router.post('/book', async (req, res) => {
    try{
        bookData = req.body;
        await db.addBook(bookData.name,bookData.isbn,bookData.author);
         res.send("Book added successfully").status(201);
    }catch(e){
        console.log(e);
        res.status(500);
    }
});

// Add a new author
router.post('/author', async (req, res) => {
    try{
        authorData = req.body;
        await db.addAuthor(authorData.firstName,authorData.lastName);
         res.send("Author created successfully").status(201);
    }catch(e){
        console.log(e);
        res.status(500);
    }
});

// Update a book
router.put('/book/:id', async (req, res) => {
    try{
        bookData = req.body;
        await db.updateBook(bookData.id,bookData.name,bookData.isbn,bookData.author);
         res.send("Book updated successfully").status(204);
    }catch(e){
        console.log(e);
        res.status(500);
    }
});

// Update an author
router.put('/author/:id', async (req, res) => {
    try{
        authorData = req.body;
        await db.updateAuthor(authorData.id,authorData.firstName,authorData.lastName);
         res.send("Author updated successfully").status(204);
    }catch(e){
        console.log(e);
        res.status(500);
    }
});

module.exports = router;