import React from 'react'

export default function BookList(props) {
    const books = props.books

    return (
        
        <div className="book-list">
            <ul>
                {books.map((book) => (<li key={book.id}> {book.name} | {book.firstName} {book.lastName} | {book.isbn}</li>))}
            </ul>
        </div>
    )
}
