import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends PureComponent {

  onChangeBookList = evt => {

    this.props.onChangeBookList({
      listValue: evt.target.value,
      book: this.props.bookData
    });

  };

  render() {

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.bookData.imageLinks ? this.props.bookData.imageLinks.thumbnail : ''})` }}></div>
            <BookShelfChanger defaultValue={this.props.bookData.shelf} handleChange={this.onChangeBookList}/>
          </div>
          <div className="book-title">{this.props.bookData.title}</div>
          <div className="book-authors">{this.props.bookData.authors && this.props.bookData.authors.join(', ')}</div>
        </div>
      </li>
    )

  }
}

Book.propTypes = {
  bookData: PropTypes.object.isRequired
};

export default Book;
