import React from 'react'
import {Link} from 'react-router-dom'

export default function BookList(props) {
    const books = props.books
    function neatUrl(val){
        val = val.split(' ').join('-')
        return val
    }
    return (
        
        <div className="book-list">
            <ul>
                {books.map((book) => (<Link key={book.id} style={{ color: 'inherit', textDecoration: 'inherit'}} to={{ pathname: '/book/' + neatUrl(book.name) + '/' + book.id, bookstate: book }}><li>{book.name} | {book.firstName} {book.lastName} | {book.isbn}</li></Link>))}
                
            </ul>
        </div>
    )
}
