import React from 'react';
import Book from '../Book/Book';
import './BookViewer.css';

const BookViewer = props => {
  return (
    <div className='row' row-spacer padding-button='10px'>
      <div className='col-md-4' id='book-viewer'>
        <button
          className='btn btn-primary'
          text-align='center'
          onClick={props.previousBook}
        >
          Previous Book
        </button>
      </div>
      <div className='col-md-4'>
        <Book book={props.book} />
      </div>
      <div className='col-md-4' id='book-viewer'>
        <button className='btn btn-primary' onClick={props.nextBook}>
          Next Book
        </button>
      </div>
    </div>
  );
};

export default BookViewer;
