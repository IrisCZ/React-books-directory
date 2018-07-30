import React, { Component } from 'react';
import './App.css';
import TitleField from '../TitleField/TitleField';
import AuthorField from '../AuthorField/AuthorField';
import GenreField from '../GenreField/GenreField';
import SaveButton from '../SaveButton/SaveButton';
import BookList from '../BookList/BookList';

class App extends Component {
  constructor() {
    super()
    this.state = {
      books: [],
      book : {
        title : "",
        author: "",
        genre: ""
      }
    }
    this.setSelectedBookInfo = this.setSelectedBookInfo.bind(this)
    this.save = this.save.bind(this)
    this.isBook = this.isBook.bind(this)
  }

  setSelectedBookInfo(selectedInfo) {
    let book = {...this.state.book, ...selectedInfo}
    this.setState({book: book})
  }

  isBook() {
    let values= Object.values(this.state.book)
    return values.every(value => {return value})
  }

  save(e){
    e.preventDefault()
    if (this.isBook()) {
      this.setState(prevState => ({
        books: [...prevState.books, this.state.book],
        book:  {
          title : "",
          author: "",
          genre: ""
        }
      }))
      this.title.reset();
      this.author.reset();
      this.genre.reset();
    }

  }

  render() {

    return (
      <section>
        <form id="form" className="inline">
          <TitleField ref={title => {this.title = title}} setSelectedBookInfo={this.setSelectedBookInfo} defaultValue={this.state.book.title} name={"title"}></TitleField>
          <AuthorField ref={author => {this.author = author}} setSelectedBookInfo={this.setSelectedBookInfo}  defaultValue={this.state.book.author} name={"author"}></AuthorField>
          <GenreField ref={genre => {this.genre = genre}} setSelectedBookInfo={this.setSelectedBookInfo}  defaultValue={this.state.book.genre} name={"genre"} options={["","Comedy", "Action", "Terror", "Science Fiction"]}></GenreField>
          <SaveButton save={this.save}></SaveButton>
        </form>
        <article>
        <table className="striped-table col-xs-12">
          <thead>
            <tr>
              <th  className="book-title">book title</th>
              <th  className="author">author</th>
              <th  className="genre">genre</th>
              <th  className="actions">actions</th>
            </tr>
          </thead>
          <BookList options={this.state.books} ></BookList>
        </table>
        </article>

      </section>
    );
  }
}

export default App;
