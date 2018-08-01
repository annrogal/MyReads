import React, { Component } from 'react'
import BookComponent from './BookComponent';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


class BooksList extends Component {
    static propTypes = {
      books: PropTypes.array.isRequired,
      onChangeShelf: PropTypes.func.isRequired
    }

    render() {
      const {books, onChangeShelf} = this.props

        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {books.filter((book) => (console.log(book.shelf),
                    book.shelf === 'currentlyReading')).map((book) =>(
                      <li key={ book.id }>
                        <BookComponent book={ book } onChangeShelf={ onChangeShelf } />
                      </li>  
                ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {books.filter((book) => (book.shelf === 'wantToRead'))
                                .map((book) => (
                                  <li key={book.id}>
                                  <BookComponent book={ book } onChangeShelf={ onChangeShelf } />
                                  </li>
                ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {books.filter((book) => (book.shelf === 'read'))
                                 .map((book) => (
                                  <li key={book.id}>
                                  <BookComponent book={ book } onChangeShelf={ onChangeShelf } />
                                  </li>
                ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search">
              <Link to='/search'>Add a book</Link>
          </div>
        </div>
        )
    }
}

export default BooksList