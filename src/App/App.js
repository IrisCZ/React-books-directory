import React, { Component } from 'react';
import './App.css';
import TitleField from '../TitleField/TitleField';
import AuthorField from '../AuthorField/AuthorField';
import GenreField from '../GenreField/GenreField';

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
        <TitleField setSelectedBookInfo={this.setSelectedBookInfo} name={"title"}></TitleField>
        <AuthorField setSelectedBookInfo={this.setSelectedBookInfo} name={"author"}></AuthorField>
        <GenreField setSelectedBookInfo={this.setSelectedBookInfo} name={"genre"} options={["Comedy", "Action", "Terror"]}></GenreField>

      </section>
    );
  }
}

export default App;
