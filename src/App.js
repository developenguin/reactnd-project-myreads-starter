import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './components/SearchPage/SearchPage';
import BooksOverview from './components/BooksOverview/BooksOverview';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      books: []
    };

    this.onChangeBookList = this.onChangeBookList.bind(this);

  }

  componentDidMount() {

    BooksAPI.getAll()
      .then(books => {
        this.setState({ books });
      });

  }

  onChangeBookList(evtData) {

    const { bookId, listValue } = evtData,
          books = this.state.books,

          newBooks = books.map(book => {

            if (book.id !== bookId) {
              return book
            } else {
              return {
                ...book,
                shelf: listValue
              }
            }

          });

    this.setState({
      books: newBooks
    });

  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => ( <BooksOverview onChangeBookList={this.onChangeBookList} books={this.state.books} /> )}/>
        <Route exact path="/search" render={() => ( <SearchPage/> )}/>
      </div>
    );
  }

}

export default BooksApp
