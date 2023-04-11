import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import url from '../config'
import AccountIcon from 'mdi-react/AccountIcon'
import BookAddIcon from 'mdi-react/BookAddIcon'
import AccountPlusIcon from 'mdi-react/AccountPlusIcon'
import BookIcon from 'mdi-react/BookIcon'
import TrashIcon from 'mdi-react/TrashCircleOutlineIcon'

export default class Author extends Component {

    constructor(){
        super();
        this.state = {author:[]}
    }
    
    getAuthor() {
        let author = this.props.match.params;

        axios.get(url + '/author/' + author.id)
        .then( (response) => {
            // handle success
            console.log(response.data);
            this.setState({author:response.data})
            console.log(this.state.author)
        })
        .catch( (error) => {
            // handle error
            console.log(error);
        })
    }

    componentDidMount(){
        this.getAuthor();
    }

    deleteHandler = (event) => {
        const button = event.currentTarget;
        button.disabled = true;
        const noBtn = document.getElementById('noBtn');
        noBtn.disabled = true;
        this.deleteAuthor();
    }

    deleteAuthor() {
        let author = this.props.match.params;

        axios.delete(url + '/author/' + author.id)
        .then( (response) => {
            // handle success
            console.log(response.data);
            alert(response.data);
            window.location.href = 'http://localhost:3000/authors';
        })
        .catch( (error) => {
            // handle error
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="deleteAuthorModal" data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="deleteAuthorModal" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Delete Author</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                Are you sure you want to delete this author?
                            </div>
                            <div className="modal-footer">
                                <button id='noBtn' type="button" className="btn btn-success" data-dismiss="modal">No</button>
                                <button type="button" onClick={this.deleteHandler} className="btn btn-danger">Yes</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h5 className="page-header">Author - Here's one of your favourite authors</h5>
                <div className="row align-items-center">
                    <div className="col-md-12 text-center">
                    <BookIcon className="app-icon mb-1 mr-1" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="../../">Books</Link> | <AccountIcon className="app-icon mb-1 mr-1" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/authors">Authors</Link> | <BookAddIcon className="app-icon mb-1 mr-1" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add-book">Add book</Link> | <AccountPlusIcon className="app-icon mb-1 mr-2" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/add-author">Add author</Link>
                    </div>
                </div>
                <div className="book-list abook">
                    <div className="row">
                    <div><AccountIcon className="app-icon mb-1 mr-1" size={16} /><span>{this.state.author.firstName} {this.state.author.lastName}</span></div>
                    </div>
                    <div className="row mt-3 mb-3">

                    </div>
                    <div className="row">
                        <div>
                            <Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} data-toggle="modal" data-target="#deleteAuthorModal" to=""><TrashIcon className="app-icon text-danger mb-1 mr-1" size={16} /><span>Delete</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
