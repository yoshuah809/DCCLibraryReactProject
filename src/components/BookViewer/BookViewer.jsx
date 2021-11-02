import React from 'react';

const BookViewer = props => {
  return (
    <div className='row' row-spacer padding-button='10px'>
      <div className='col-md-4'>
        <button className='btn btn-secondary' onClick={props.previousBook}>
          Next Book
        </button>
      </div>
      <div className='col-md-4'>
        <h1>{props.book.title}</h1>
        <h4>{props.book.author}</h4>
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
