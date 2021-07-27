import React, { Component } from 'react'
import BookList from './bookList'
import axios from 'axios'
import url from '../config'
import {Link} from 'react-router-dom'
import AccountIcon from 'mdi-react/AccountIcon'
import BookAddIcon from 'mdi-react/BookAddIcon';
import AccountPlusIcon from 'mdi-react/AccountPlusIcon';

export default class Books extends Component {

    constructor(){
        super();
        this.state = {books:[], brain: 'Anonymous'};
    }

    getBooks() {
        axios.get(url + '/books')
        .then( (response) => {
            // handle success
            console.log(response.data);
            this.setState({books:response.data})
            console.log(this.state.books)
        })
        .catch( (error) => {
            // handle error
            console.log(error);
        })
    }

    componentDidMount(){
        this.getBooks()
    }

    render() {
        return (
            <div>
                <h5 className="page-header">Booklist - Know more about your favourite books</h5>
                <div className="row align-items-center">
                    <div className="col-md-12 text-center">
                    <AccountIcon className="app-icon mb-1 mr-1" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/authors">Authors</Link> | <BookAddIcon className="app-icon mb-1 mr-1" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add-book">Add book</Link> | <AccountPlusIcon className="app-icon mb-1 mr-2" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add-author">Add author</Link>
                    </div>
                </div>
                <BookList books={this.state.books} />
            </div>
        )
    }
}