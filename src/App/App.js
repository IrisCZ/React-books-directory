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
      book: {
        title: "",
        author: "",
        genre: "",
        id: -1
      },
      counter: 1
    }

    this.setSelectedBookInfo = this.setSelectedBookInfo.bind(this)
    this.save = this.save.bind(this)
    this.isBook = this.isBook.bind(this)
    this.removeBook = this.removeBook.bind(this)
    this.editBook = this.editBook.bind(this)
  }

  setSelectedBookInfo(selectedInfo) {
    let book = {...this.state.book, ...selectedInfo}
    this.setState({book: book})
  }

  isBook() {
    let values= Object.values(this.state.book)
    return values.every(value => {return value})
  }
  
  updateBook() {
    this.state.books.forEach(book => {
      if(book.id === this.state.book.id) {
        book.title = this.state.book.title
        book.author = this.state.book.author
        book.genre = this.state.book.genre
        book.id = this.state.book.id
      }
    })
    this.setState(prevState => ({
      books: prevState.books
    }))
    this.resetBook();
  }

  resetBook() {
    this.setState({
      book:  {
        title : "",
        author: "",
        genre: "",
        id: -1
      }
    })
  }

  createBook() {
    let book = this.state.book
    book.id = this.state.counter
    this.setState(prevState => ({
      books: [...prevState.books, book],
      book:  {
        title : "",
        author: "",
        genre: "",
        id: -1
      },
      counter: this.state.counter+1
    }))
  }

  save(e){
    e.preventDefault()
    if (this.isBook()) {
      if(this.state.book.id > 0) {
        this.updateBook()
      } else {
        this.createBook()
      }
    }
    this.title.reset();
    this.author.reset();
    this.genre.reset();
    console.log(this.state.book)
    }

  removeBook(bookToDelete){
    this.setState({books: this.state.books.filter(book => book.id !== bookToDelete.id)})
  }
  
  editBook(bookToUpdate){
    this.setState({book: {
      title: bookToUpdate.title, 
      author: bookToUpdate.author, 
      genre: bookToUpdate.genre, 
      id: bookToUpdate.id
    }})
    this.title.setValue(bookToUpdate.title)
    this.author.setValue(bookToUpdate.author)
    this.genre.setValue(bookToUpdate.genre)
  }

  render() {
    return (
      <section>
        <form id="form" className="inline">
          <TitleField ref={title => {this.title = title}} setSelectedBookInfo={this.setSelectedBookInfo} defaultValue={this.state.book.title} name={"title"}></TitleField>
          <AuthorField ref={author => {this.author = author}} setSelectedBookInfo={this.setSelectedBookInfo}  defaultValue={this.state.book.author} name={"author"}></AuthorField>
          <GenreField ref={genre => {this.genre = genre}} setSelectedBookInfo={this.setSelectedBookInfo}  defaultValue={this.state.book.genre} name={"genre"} options={["","Action", "Comedy", "Science Fiction", "Terror"]}></GenreField>
          <SaveButton save={this.save}></SaveButton>
        </form>
        <article>
        <table className="striped-table col-xs-12">
          <thead>
            <tr>
              <th  className="book-title">title</th>
              <th  className="author">author</th>
              <th  className="genre">genre</th>
              <th  className="actions">actions</th>
            </tr>
          </thead>
          <BookList options={this.state.books} editBook={this.editBook} removeBook={this.removeBook}></BookList>
        </table>
        </article>

      </section>
    );
  }
}

export default App;
