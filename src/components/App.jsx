import React, { Component } from 'react';
import './App.css';
import TitleBar from './TitleBar/TitleBar';

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

  render() {
    return (
      <div className='container-fluid'>
        <TitleBar />
        <div className='row'>
          <div className='col-md-4'>
            <button
              className='btn btn-secondary'
              onClick={this.goToPreviousBook}
            >
              Next Book
            </button>
          </div>
          <div className='col-md-4'>
            {/*Display Book with cover here*/}
            <h1>{this.books[this.state.bookNumber].title}</h1>
            <h4>{this.books[this.state.bookNumber].author}</h4>
          </div>
          <div className='col-md-4'>
            <button className='btn btn-secondary' onClick={this.goToNextBook}>
              Next Book
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
