import React, { Component } from 'react';

class BookCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createNewBook(this.state);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='col-md-6'>
          <label className='control-label'>Book Name</label>
          <input
            onChange={this.handleChange}
            name='title'
            type='text'
            value={this.state.title}
            class='form-control'
            placeholder='Book Name'
          />
          <label>Author</label>
          <input
            onChange={this.handleChange}
            name='author'
            type='text'
            value={this.state.author}
            class='form-control'
            placeholder='Author'
            width='10%'
          />
          <button type='submit' className='btn btn-primary'>
            Create Book
          </button>
        </div>
      </form>
    );
  }
}

export default BookCreator;
