import React, { Component } from 'react';

class BookShelfChanger extends Component {

  render() {
    return (
      <div className="book-shelf-changer">
        <select onChange={this.props.handleChange}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">Delete</option>
        </select>
      </div>
    )
  }

};

export default BookShelfChanger;
