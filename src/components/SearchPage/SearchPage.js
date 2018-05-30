import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksGrid from '../BooksGrid/BooksGrid';
import * as BooksAPI from '../../BooksAPI';
import { Debounce } from 'react-throttle';

export default class SearchPage extends Component {

  state = {
    searchResults: []
  };

  onChangeInput = evt => {

    const searchString = evt.target.value;

    BooksAPI.search(searchString)
      .then(response => {

        this.setState({

          searchResults: response.error ? [] : response.map(book => {

            const match = this.props.collection
              .find(element => element.id === book.id);

            return match ? match : book;

          })

        });

      })
      .catch(() => {
        this.setState({
          searchResults: []
        })
      });

  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <Debounce time="200" handler="onChange">
              <input onChange={this.onChangeInput} type="text" placeholder="Search by title or author"/>
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid onChangeBookList={this.props.onChangeBookList} books={this.state.searchResults}/>
        </div>
      </div>
    )
  }

}
