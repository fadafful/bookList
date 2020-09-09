var mysql = require('mysql');

var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'booklist',
        port: '3306'
});

let expressDB = {};

// Retrieve all books in descending order
expressDB.allBooks = () => {
   return new Promise((resolve,reject) => {
        con.query('SELECT * FROM `books` `b` ORDER BY `b`.`id` DESC',(err,res) => {
                if(err) reject(err)
                resolve(res);
        })
   })
}

// Retrieve all authors in ascending order
expressDB.allAuthors = () => {
        return new Promise((resolve,reject) => {
                con.query('SELECT * FROM `authors` `a` ORDER BY `a`.`id` DESC',(err,res) => {
                        if(err) reject(err)
                        resolve(res);
                })
        })
}

// Retrieve a particular book by id
expressDB.getBook = (id) => {
        return new Promise((resolve, reject) => {
                con.query('SELECT * FROM `books` `b` INNER JOIN `authors` `a` ON `a`.`id` = `b`.`id` WHERE `b`.`id`=?',[id],
                (err,res) => {
                        if(err) reject(err);
                        resolve(res[0]);
                })
        })
}

// Retrieve a particular author by id
expressDB.getAuthor = (id) => {
        return new Promise((resolve, reject) => {
                con.query('SELECT * FROM `authors` WHERE `id`=?',[id],
                (err,res) => {
                        if(err) reject(err);
                        resolve(res[0]);
                })
        })
}

// Creates a new book
expressDB.addBook = (name,isbn,author) => {
        return new Promise((resolve, reject) => {
                con.query("INSERT INTO `books` (`name`,`isbn`,`author`)"
                        + " VALUES(?,?,?)",[name,isbn,author],
                (err,res) => {
                        if(err) reject(err);
                        resolve(res[0]);
                })
        })
}

// Creates a new author for of a book
expressDB.addAuthor = (firstName,lastName) => {
        return new Promise((resolve, reject) => {
                con.query("INSERT INTO `authors` (`firstName`,`lastName`)"
                        + " VALUES(?,?)",[firstName,lastName],
                (err,res) => {
                        if(err) reject(err);
                        resolve(res[0]);
                })
        })
}

// Updates a book
expressDB.updateBook = (id,name,isbn,author) => {
        return new Promise((resolve, reject) => {
                con.query("UPDATE books SET `name`=?,`isbn`=?,`author`=? WHERE `id`=?",[name,isbn,author,id],
                (err,res) => {
                        if(err) reject(err);
                        resolve(res[0]);
                })
        })
}

// Updates an author
expressDB.updateAuthor = (id,firstName,lastName) => {
        return new Promise((resolve, reject) => {
                con.query("UPDATE `authors` SET `firstName`=?,`lastName`=? WHERE `id`=?",[firstName,lastName,id],
                (err,res) => {
                        if(err) reject(err);
                        resolve(res[0]);
                })
        })
}

module.exports = expressDB;