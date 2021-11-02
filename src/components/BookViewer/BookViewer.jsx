import React from 'react';
import Book from '../Book/Book';

const BookViewer = props => {
  return (
    <div className='row' row-spacer padding-button='10px'>
      <div className='col-md-4'>
        <button className='btn btn-secondary' onClick={props.previousBook}>
          Next Book
        </button>
      </div>
      <div className='col-md-4'>
        <Book book={props.book} />
      </div>
      <div className='col-md-4'>
        <button className='btn btn-secondary' onClick={props.nextBook}>
          Next Book
        </button>
      </div>
    </div>
  );
};

export default BookViewer;
