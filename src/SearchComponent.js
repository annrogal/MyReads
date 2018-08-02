import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BookComponent from './BookComponent'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class SearchBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

    state = {
        query: "",
        books: []
    }

    updateQuery = (query) => {   
        if(!query) { return }
            
        this.setState({ 
          query: query 
        })

        BooksAPI.search(query.trim()).then((books) => {
          books.length > 0 ? this.setState({ books: books }) :  this.setState({ books: [] })
        }) 

    }

    render() {
        const { query, books } = this.state
        const { onChangeShelf } = this.props

        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={query} onChange={(evt) => this.updateQuery(evt.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                <BookComponent book={ book } onChangeShelf={ onChangeShelf } />
                </li>
            ))}</ol>
            </div>
          </div>
        )
    }
}

export default SearchBook