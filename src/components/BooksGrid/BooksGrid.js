import React, { Component } from 'react';
import Book from '../Book/Book';

export default class BooksGrid extends Component {

  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map(book => {
          return (
            <Book/>
          )
        })}
      </ol>
    )
  }
}
