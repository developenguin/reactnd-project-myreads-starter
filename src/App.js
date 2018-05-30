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

  }

  async componentDidMount() {

    const books = await BooksAPI.getAll();
    this.setState({ books });

  }

  onChangeBookList = evtData => {

    const changedBook = {...evtData.book},
          listValue = evtData.listValue,
          books = this.state.books,
          idList = books.map(book => book.id);

    BooksAPI.update(changedBook, listValue)
      .then(() => {

        if (!idList.includes(changedBook.id)) {

          this.setState({
            books: [{ shelf: listValue, ...changedBook}, ...books]
          });

          return;

        }

        this.setState({
          books: books.map(book => {
            return changedBook.id === book.id ? { ...book, shelf: listValue } : book;
          })
        });

      });

  };

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => ( <BooksOverview onChangeBookList={this.onChangeBookList} books={this.state.books} /> )}/>
        <Route exact path="/search" render={() => ( <SearchPage collection={this.state.books} onChangeBookList={this.onChangeBookList} /> )}/>
      </div>
    );
  }

}

export default BooksApp
