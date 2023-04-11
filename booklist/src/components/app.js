import React from 'react'
import Books from './books'
import AddBook from './addBook'
import AddAuthor from './addAuthor'
import Authors from './authors'
import Book from './book'
import Author from './author'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function app() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Books}/>
                    <Route path="/book/:name/:id" component={Book}/>
                    <Route path="/author/:name/:id" component={Author}/>
                    <Route path="/add-book" component={AddBook}/>
                    <Route path="/authors" component={Authors}/>
                    <Route path="/add-author" component={AddAuthor}/>
                </Switch>
            </Router>
            <footer className="footer">
                <div className="text-center">
                    Copyright &copy;<script>
                        document.write(new Date().getFullYear());
                    </script> Booklist. All rights reserved.
                </div>
            </footer>
        </div>
    )
}
