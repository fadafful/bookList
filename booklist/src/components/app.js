import React from 'react'
import Books from './books'
import AddBook from './addBook'
import AddAuthor from './addAuthor'
import Authors from './authors'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default function app() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={Books}/>
                    <Route path="/book" component={Books}/>
                    <Route path="/add-book" component={AddBook}/>
                    <Route path="/authors" component={Authors}/>
                    <Route path="/add-author" component={AddAuthor}/>
                </Switch>
            </Router>
        </div>
    )
}
