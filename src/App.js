import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Aloha Spark",
      books: []
    }
  }

  componentDidMount() {

    fetch("http://www.json-generator.com/api/json/get/cgwULHiWDC?indent=2")
      .then(response => response.json())
      .then(data => {
        const books = data;
        this.setState({books: books});
      })
      
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.name} Library</h1>
        <section className="books">
          {
            this.state.books.map(book => (
              <article>
                <h4>{book.title}</h4>
                <img src={book.picture}/>
                <p>by <span>{book.author}</span></p>
                <p className="pages">{book.pages} pages</p>
              </article>
             ) )
          }
        </section>
      </div>
    );
  }
}

export default App;
