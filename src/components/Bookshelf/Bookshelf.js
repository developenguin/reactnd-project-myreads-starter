import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BooksGrid from '../BooksGrid/BooksGrid';

class Bookshelf extends Component {

  render() {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <BooksGrid books={this.props.books}/>
        </div>
      </div>
    )

  }

}

Bookshelf.PropTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default Bookshelf;
