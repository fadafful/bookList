import React,{useState,useEffect} from 'react'
import axios from 'axios'
import url from '../config'
import {Link} from 'react-router-dom'
import BookIcon from 'mdi-react/BookIcon';
import AccountIcon from 'mdi-react/AccountIcon'

function AddBook() {

    const [name, setName] = useState('')
    const [isbn, setIsbn] = useState('')
    const [author, setAuthor] = useState('')
    const [authors, setAuthors] = useState([])
    const [validated, setValidated] = useState(false);

    useEffect(() => {
      axios.get(url + '/authors')
      .then((response) => {
        // handle success
        console.log(response);
        setAuthors(response.data)
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
    },[]);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            alert("Please fill all fields");
            
        } else {
                
            setValidated(true);
            postBook();
        }
        
    };

    function postBook () {
        axios.post(url + '/book', {
            name: name,
            isbn: isbn,
            author: author
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
                    <h5 className="page-header">Add book - Add your favourite book to the list</h5>
                    <div className="row align-items-center">
                        <div className="col-md-12 text-center">
                            <BookIcon className="app-icon mb-1 mr-1" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="./">Books</Link> | <AccountIcon className="app-icon mb-1 mr-2" size={16} /><Link className="header-links" style={{ color: 'inherit', textDecoration: 'inherit'}} to="/authors">Authors</Link>
                        </div>
                    </div>
                        <form className="add needs-validation" noValidate validated={validated} onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                <label>Name of book</label>
                                <input type="text" className="form-control" id="name" placeholder="Book name" onChange={(e) => setName(e.target.value)} required/>
                                </div>
                                <div className="form-group col-md-6">
                                <label>ISBN</label>
                                <input type="text" className="form-control" id="isbn" placeholder="ISBN" onChange={(e) => setIsbn(e.target.value)} required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <label className="my-1 mr-2">Author</label>
                                <select className="custom-select my-1 mr-sm-2" id="author" onChange={(e) => setAuthor(e.target.value)} required>
                                    <option>Choose author</option>
                                    {authors.map((author) => (<option key={author.id} value={author.id}>{author.firstName} {author.lastName}</option>))}
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Add book</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook
