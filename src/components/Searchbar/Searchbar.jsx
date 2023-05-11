import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Searchbar,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled.jsx';
import { toast } from 'react-toastify';

export class SearchImg extends Component {
  state = {
    inputSearch: '',
  };

  handleInputChange = event => {
    this.setState({ inputSearch: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.inputSearch.trim() === '') {
      toast.error('Nope, do it again..!');
      return;
    }

    this.props.onSubmit(this.state.inputSearch);
    this.reset();
  };

  reset = () => {
    this.setState({ inputSearch: '' });
  };

  render() {
    return (
      <Searchbar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn type="submit">
            <span>Search</span>
          </SearchFormBtn>

          <SearchFormInput
            type="text"
            value={this.state.inputSearch}
            onChange={this.handleInputChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images which you want..."
          />
        </SearchForm>
      </Searchbar>
    );
  }
}

SearchImg.propTypes = { onSubmit: PropTypes.func };
