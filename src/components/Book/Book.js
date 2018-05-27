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
      bookTitle: this.props.title
    });

  }

  render() {

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.backgroundImageUrl})` }}></div>
            <BookShelfChanger handleChange={this.onChangeBookList}/>
          </div>
          <div className="book-title">{this.props.title}</div>
          <div className="book-authors">{this.props.author}</div>
        </div>
      </li>
    )

  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  backgroundImageUrl: PropTypes.string.isRequired
};

export default Book;
