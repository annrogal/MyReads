import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import BookComponent from './BookComponent'

class SearchBook extends Component {
    state = {
        query: '',
        books: []
    }

    updateQuery = (query) => {

            this.setState({query: query})
            BooksAPI.search(query.trim()).then((books) => {
                books.length > 0 ? this.setState({books: books}) : this.setState({books: []})
            })

        
    }

    render() {
        const { query, books } = this.state
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={query} onChange={(evt) => this.updateQuery(evt.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {books.map((book) => (
            <li key={book.id}>
                <BookComponent book={book} />
            </li>
            ))}</ol>
            </div>
          </div>
        )
    }
}

export default SearchBook