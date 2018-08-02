import React, {Component} from 'react'

class BookComponent extends Component {
    render() {
      const {book, onChangeShelf} = this.props
        return (
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ 
                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                      }}></div>
                    <div className="book-shelf-changer">
                      <select value={book.shelf ? book.shelf : "none"} onChange={(event) => onChangeShelf(book, event.target.value)}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.author}</div>
                </div>
              )
    }
}

export default BookComponent