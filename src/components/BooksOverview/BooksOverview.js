import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from '../Bookshelf/Bookshelf';

export default class BooksOverview extends Component {

  render() {

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Bookshelf onChangeBookList={this.props.onChangeBookList} name="Currently Reading" books={this.props.books.filter(book => book.collection === 'currentlyReading')} />
            <Bookshelf onChangeBookList={this.props.onChangeBookList} name="Want To Read" books={this.props.books.filter(book => book.collection === 'wantToRead' )} />
            <Bookshelf onChangeBookList={this.props.onChangeBookList} name="Read" books={this.props.books.filter(book => book.collection === 'read' )} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }

}
