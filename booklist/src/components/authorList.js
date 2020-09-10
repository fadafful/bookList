import React from 'react'

export default function AuthorList(props) {

    const authors = props.authors

    return (
        <div className="author-list">
            <ul>
                {authors.map((author) => (<li key={author.id}> {author.firstName} {author.lastName}</li>))}
            </ul>
        </div>
    )
}
