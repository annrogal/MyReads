import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BookComponent from './BookComponent'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBook extends Component {
    state = {
        query: "",
        books: []
    }

    updateQuery = (query) => {   
        if(!query) {return}
            this.setState({ query: query })
            BooksAPI.search(query.trim()).then((books) => {
              if (books.length > 0) {
                this.setState({ books: books })
              } else {
                this.setState({ books: [] })
              }
            }) 
    }

    render() {
        console.log(this.props)
        const { query, books } = this.state
        const { onChangeShelf } = this.props

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to=
              "/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={query} onChange={(evt) => this.updateQuery(evt.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {books.map((book) => (
            <li key={book.id}>
                <BookComponent book={book} onChangeShelf={(book, shelf) => onChangeShelf(book, shelf)}/>
            </li>
            ))}</ol>
            </div>
          </div>
        )
    }
}

export default SearchBook