import React from 'react'
import {Link} from 'react-router-dom'

export default function AuthorList(props) {
    const authors = props.authors
    function neatAuthUrl(val){
        val = val.split(' ').join('-')
        return val
    }
    return (
        <div className="author-list">
            <ul>
                {authors.map((author) => (<Link key={author.id} style={{ color: 'inherit', textDecoration: 'inherit'}} to={{ pathname: '/author/' + neatAuthUrl(author.firstName + ' ' + author.lastName) + '/' + author.id, authorstate: author }}><li>{author.firstName} {author.lastName}</li></Link>))}
                
            </ul>
        </div>
    )
}
