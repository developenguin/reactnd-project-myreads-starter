import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BooksGrid from '../BooksGrid/BooksGrid';
import * as BooksAPI from '../../BooksAPI';

export default class SearchPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      searchResults: []
    };

    this.onChangeInput = this.onChangeInput.bind(this);
  }

  onChangeInput(evt) {

    const searchString = evt.target.value;

    BooksAPI.search(searchString)
      .then(response => {

        if (!response.error) {
          this.setState({
            searchResults: response
          });
        } else {
          this.setState({
            searchResults: []
          })
        }

      })
      .catch(() => {
        this.setState({
          searchResults: []
        })
      });

  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input onChange={this.onChangeInput} type="text" placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
          <BooksGrid onChangeBookList={this.props.onChangeBookList} books={this.state.searchResults}/>
        </div>
      </div>
    )
  }

}
