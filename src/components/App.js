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

  render() {
    return (
      <div className='container-fluid'>
        <TitleBar />
        <div className='row'>
          <div className='col-md-4'>
            {/*Button to move the previous book viewed*/}
          </div>
          <div className='col-md-4'>
            {/*Display Book with cover here*/}
            <h1>{this.books[this.state.bookNumber].title}</h1>
            <h4>{this.books[this.state.bookNumber].author}</h4>
          </div>
          <div className='col-md-4'>{/*Button to move the next book */}</div>
        </div>
      </div>
    );
  }
}

export default App;
