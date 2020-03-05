import React, { Component } from 'react';
import Book from './components/Book'

import './App.css';
import Axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'My Home',
      books: []
    }
  }

  componentDidMount() {
    Axios.get("http://www.json-generator.com/api/json/get/cgwULHiWDC?indent=2")
      .then(response => {
        const books = response.data;
        this.setState({books: books})
      })
  }
  // book should have a title, author, number of pages, and genre
  render() {
    return (
      <div className="App">
        <h1>{this.state.title} Library</h1>
        {this.state.books.map((book) => <Book book={book} />)}
      </div>
    );
  }
}

export default App
