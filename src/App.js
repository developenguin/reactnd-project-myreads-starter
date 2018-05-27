import React from 'react';
// import * as BooksAPI from './BooksAPI';
import './App.css';
import SearchPage from './SearchPage/SearchPage';
import BooksOverview from './BooksOverview/BooksOverview';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => ( <BooksOverview/> )}/>
        <Route exact path="/search" render={() => ( <SearchPage/> )}/>
      </div>
    );
  }

}

export default BooksApp
