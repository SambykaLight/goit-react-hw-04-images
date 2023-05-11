import React, { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchImg } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    error: '',
    isLoading: false,
    largeImageURL: '',
    amount: 12,
    openModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const thisQuery = this.state.searchQuery;
    if (prevQuery !== thisQuery || this.state.page !== prevState.page) {
      this.fetchApi();
    }
  }

  onLoadMore = () => {
    this.setState(state => ({ page: state.page + 1 }));
    console.log('onLoadMore');
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery, images: [], page: 1 });
  };

  fetchApi = () => {
    const KEY = '34696106-88b2027f4b58668cbaef654c9';
    const URL = `https://pixabay.com/api/?key=${KEY}&q=${this.state.searchQuery}&image_type=photo&orientation=horizontal&page=${this.state.page}&per_page=${this.state.amount}`;
    this.setState({ isLoading: true });

    fetch(URL)
      .then(data => {
        if (data.ok) {
          return data.json();
        }
      })

      .then(res => {
        console.log(res);
        this.setState(prevState => ({
          images: [...(prevState.images || []), ...res.hits],
          isLoading: false,
        }));
      })

      .catch(error => console.log(error));
  };

  render() {
    return (
      <>
        <SearchImg onSubmit={this.handleFormSubmit} />
        <ImageGallery
          isLoading={this.state.isLoading}
          images={this.state.images}
          openModal={this.openModal}
          onLoadMore={this.onLoadMore}
        />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}
