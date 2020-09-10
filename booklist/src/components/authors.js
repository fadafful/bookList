import React, { Component } from 'react'
import AuthorList from './authorList'
import axios from 'axios'
import url from '../config'
import {Link} from 'react-router-dom'
import BookIcon from 'mdi-react/BookIcon';
import BookAddIcon from 'mdi-react/BookAddIcon';
import AccountAddIcon from 'mdi-react/AccountAddIcon';

export default class Authors extends Component {

    constructor(){
        super();
        this.state = {authors:[]}
    }

    getAuthors() {
        axios.get(url + '/authors')
        .then( (response) => {
            // handle success
            console.log(response.data);
            this.setState({authors:response.data})
            console.log(this.state.authors)
        })
        .catch( (error) => {
            // handle error
            console.log(error);
        })
    }

    componentDidMount(){
        this.getAuthors()
    }

    render() {
        return (
            <div>
                <h5 className="page-header">Authors Here are all your favourite authors</h5>
                <div className="row align-items-center">
                    <div className="col-md-12 text-center">
                    <BookIcon className="app-icon mb-1 mr-1" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="./">Books</Link> | <BookAddIcon className="app-icon mb-1 mr-1" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add-book">Add book</Link> |  <AccountAddIcon className="app-icon mb-1 mr-2" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add-author">Add author</Link>
                    </div>
                </div>
                <AuthorList authors={this.state.authors} />
            </div>
        )
    }
    
}
