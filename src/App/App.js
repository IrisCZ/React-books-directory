import React, { Component } from 'react';
import './App.css';
import TitleField from '../TitleField/TitleField';
import AuthorField from '../AuthorField/AuthorField';

class App extends Component {
  constructor() {
    super()
    this.state = {
      book : {
        // title : "",
        // author: "",
        // genre: ["Comedy", "Action", "Terror"]
      }
    }
    this.setSelectedBookInfo = this.setSelectedBookInfo.bind(this)
  }

  setSelectedBookInfo(selectedInfo) {
    this.setState({ book: selectedInfo})
    console.log(this.state.book)
  }

  render() {
    return (
      <section className="app">
        <TitleField setSelectedBookInfo={this.setSelectedBookInfo}></TitleField>
        <AuthorField setSelectedBookInfo={this.setSelectedBookInfo}></AuthorField>

      </section>
    );
  }
}

export default App;
