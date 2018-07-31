import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList'
import SearchComponent from './SearchComponent'

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: false
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf
      this.setState((state) => ({
        books: state.books.filter(b => b.id !== book.id)
      }))
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
         <SearchComponent books={this.state.books} onChangeShelf={this.changeShelf}/>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
           <BooksList books={this.state.books} onChangeShelf={this.changeShelf}/>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
