import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';
import Footer from './Footer/Footer';
import BookCreator from './BookCreator/BookCreator';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.books = [
      { title: 'Bible', author: 'God?' },
      { title: 'Sonetos de la Muerte', author: 'Gabriela Mistral' },
      { title: 'To Helen', author: 'Edgar Alan Poe' },
      { title: 'The Old Man and the Sea', author: 'Ernest Hemingway' },
    ];
    this.state = { bookNumber: 1 };
  }
  goToNextBook = () => {
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber++;
    if (tempBookNumber === this.books.length) {
      tempBookNumber = 0;
    }
    this.setState({
      bookNumber: tempBookNumber,
    });
  };

  goToPreviousBook = () => {
    let tempBookNumber = this.state.bookNumber;
    tempBookNumber--;
    if (tempBookNumber < 0) {
      tempBookNumber = this.books.length - 1;
    }
    this.setState({
      bookNumber: tempBookNumber,
    });
  };

  createBook = newBook => {
    console.log('From the crete book on App component', newBook);
    this.books.push(newBook);
    this.setState({ bookNumber: this.books.length - 1 });
  };

  render() {
    return (
      <div className='container-fluid'>
        <TitleBar />
        <BookViewer
          book={this.books[this.state.bookNumber]}
          nextBook={this.goToNextBook}
          previousBook={this.goToPreviousBook}
        />
        <BookCreator createNewBook={this.createBook} />
        <Footer />
      </div>
    );
  }
}

export default App;
