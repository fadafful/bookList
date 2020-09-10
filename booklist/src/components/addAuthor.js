import React,{useState,useEffect} from 'react'
import axios from 'axios'
import url from '../config'
import {Link} from 'react-router-dom'
import BookIcon from 'mdi-react/BookIcon';
import AccountIcon from 'mdi-react/AccountIcon'

function AddAuthor() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            alert("Please fill all fields");
        } else {
                
            setValidated(true);
            postAuthor();
        }
        
    };

    function postAuthor () {
        axios.post(url + '/author', {
            firstName: firstName,
            lastName: lastName
          })
        .then(function (response) {
            console.log(response);
            alert(response.data);
            window.location.reload();

        })
        .catch(function (error) {
            console.log(error);
        });
    }
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h5 className="page-header">Add author - Add your favourite author to the list</h5>
                <div className="row align-items-center">
                    <div className="col-md-12 text-center">
                        <BookIcon className="app-icon mb-1 mr-1" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="./">Books</Link> | <AccountIcon className="app-icon mb-1 mr-2" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/authors">Authors</Link>
                    </div>
                </div>
                <form className="add-book needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label>First name</label>
                            <input type="text" className="form-control" id="firstName" placeholder="First name" onChange={(e) => setFirstName(e.target.value)} required/>
                        </div>
                        <div className="form-group col-md-6">
                            <label>Last Name</label>
                            <input type="text" className="form-control" id="lastName" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} required/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Add author</button>
                </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default AddAuthor
