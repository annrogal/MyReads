import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BooksList from './BooksList'
import SearchComponent from './SearchComponent'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
    
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books)=> this.setState({ books }))
    })
  }

  render() {
    return (
      <div className="app">
       <Route exact path='/' render={() => (
            <BooksList books={this.state.books} onChangeShelf={this.changeShelf}/>
          )}/>
        <Route path='/search' render={() => (<SearchComponent books={this.state.books} onChangeShelf={this.changeShelf}/>
      )}/> 
      </div>
    )
  }
}

export default BooksApp
