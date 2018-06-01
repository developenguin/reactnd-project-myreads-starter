import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Book from '../Book/Book';

class BooksGrid extends PureComponent {

  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map((book, idx) => {
          return (
            <Book onChangeBookList={this.props.onChangeBookList} bookData={book} key={`bg_${idx}`} />
          )
        })}
      </ol>
    )
  }
}

BooksGrid.propTypes = {
  books: PropTypes.array.isRequired
};

export default BooksGrid
