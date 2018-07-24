import React, {Component} from 'react'

class BookComponent extends Component {
    render() {
        return (
                 <li key={this.props.book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div className="book-cover" style={{ 
                          backgroundImage: this.props.book.backgroundImage
                        }}></div>
                        <div className="book-shelf-changer">
                          <select>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                          </select>
                        </div>
                      </div>
                      <div className="book-title">{this.props.book.title}</div>
                      <div className="book-authors">{this.props.book.author}</div>
                    </div>
                  </li>
        )
    }
}

export default BookComponent