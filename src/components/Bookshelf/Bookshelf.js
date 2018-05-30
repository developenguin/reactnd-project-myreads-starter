import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BooksGrid from '../BooksGrid/BooksGrid';

class Bookshelf extends PureComponent {

  render() {

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.name}</h2>
        <div className="bookshelf-books">
          <BooksGrid onChangeBookList={this.props.onChangeBookList} books={this.props.books}/>
        </div>
      </div>
    )

  }

}

Bookshelf.propTypes = {
  name: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired
};

export default Bookshelf;
