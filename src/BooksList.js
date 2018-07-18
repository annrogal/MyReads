import React, { Component } from 'react'
import BookComponent from './BookComponent';


class BooksList extends Component {
    render() {
        return (
            <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {this.props.books.filter((book) => (book.status === 'readNow'))
                                .map((book) =>(
                                <BookComponent book={book} />                 
                ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {this.props.books.filter((book) => (book.status === 'wantToRead'))
                                .map((book) => (
                  <BookComponent book={book} />
                ))}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {this.props.books.filter((book) => (book.status === 'read'))
                                 .map((book) => (
                  <BookComponent book={book}/>
                ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default BooksList