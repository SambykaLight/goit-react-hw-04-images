import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Searchbar,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled.jsx';
import { toast } from 'react-toastify';

export const SearchImg = ({ onSubmit }) => {
  const [inputSearch, setInputSearch] = useState('');

  const handleInputChange = (event) => {
    setInputSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputSearch.trim() === '') {
      toast.error('Nope, do it again..!');
      return;
    }

    onSubmit(inputSearch);
    reset();
  };

  const reset = () => {
    setInputSearch('');
  };

  return (
    <Searchbar>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn type="submit">
          <span>Search</span>
        </SearchFormBtn>

        <SearchFormInput
          type="text"
          value={inputSearch}
          onChange={handleInputChange}
          autocomplete="off"
          autoFocus
          placeholder="Search images which you want..."
        />
      </SearchForm>
    </Searchbar>
  );
};

SearchImg.propTypes = { onSubmit: PropTypes.func };
