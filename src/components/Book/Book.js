import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookShelfChanger from './BookShelfChanger';

class Book extends Component {

  constructor(props) {
    super(props);

    this.onChangeBookList = this.onChangeBookList.bind(this);

  }

  onChangeBookList(evt) {

    this.props.onChangeBookList({
      listValue: evt.target.value,
      bookId: this.props.id
    });

  }

  render() {

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLinks.thumbnail})` }}></div>
            <BookShelfChanger defaultValue={this.props.shelf} handleChange={this.onChangeBookList}/>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.authors.join(', ')}</div>
        </div>
      </li>
    )

  }
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired
};

export default Book;
