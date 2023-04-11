import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import url from '../config'
import AccountIcon from 'mdi-react/AccountIcon'
import BookAddIcon from 'mdi-react/BookAddIcon'
import AccountPlusIcon from 'mdi-react/AccountPlusIcon'
import BookIcon from 'mdi-react/BookIcon'
import BarcodeIcon from 'mdi-react/BarcodeIcon'


export default class Book extends Component {

    constructor(){
        super();
        this.state = {book:[]}
    }

    getBook() {
        let book = this.props.match.params;

        axios.get(url + '/book/' + book.id)
        .then( (response) => {
            // handle success
            console.log(response.data);
            this.setState({book:response.data})
            console.log(this.state.book)
        })
        .catch( (error) => {
            // handle error
            console.log(error);
        })
    }

    componentDidMount(){
        this.getBook();
    }

    render() {
        return (
            <div>
                <h5 className="page-header">Book - Here's one of your favourite books</h5>
                <div className="row align-items-center">
                    <div className="col-md-12 text-center">
                    <BookIcon className="app-icon mb-1 mr-1" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="../../">Books</Link> | <AccountIcon className="app-icon mb-1 mr-1" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/authors">Authors</Link> | <BookAddIcon className="app-icon mb-1 mr-1" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add-book">Add book</Link> | <AccountPlusIcon className="app-icon mb-1 mr-2" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add-author">Add author</Link>
                    </div>
                </div>
                <div className="book-list abook">
                    <div className="row">
                        <div><BookIcon className="app-icon mb-1 mr-1" size={16} /><span>{this.state.book.name}</span></div>
                    </div>
                    <div className="row">
                        <div><BarcodeIcon className="app-icon mb-1 mr-1" size={16} /><span>{this.state.book.isbn}</span></div>
                    </div>
                    <div className="row">
                    <div><AccountIcon className="app-icon mb-1 mr-1" size={16} /><span>{this.state.book.firstName} {this.state.book.lastName}</span></div>
                    </div>
                </div>
            </div>
        )
    }
}
