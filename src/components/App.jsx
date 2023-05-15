import React, { useState, useEffect } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { SearchImg } from './Searchbar/Searchbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  // const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const [largeImageURL, setLargeImageURL] = useState('');
  // const [amount, setEmount] = useState(12);
  // const [openModal, setOpenModal] = useState(false);

  // i know its a lot, i just was treining =)

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const KEY = '34696106-88b2027f4b58668cbaef654c9';
    const URL = `https://pixabay.com/api/?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&page=${page}&per_page=12`;
    setIsLoading(true);

    fetch(URL)
      .then(data => {
        if (data.ok) {
          return data.json();
        }
      })

      .then(res => {
        setImages(prevImages => [...prevImages, ...res.hits]);
        setIsLoading(false);
      })

      .catch(error => console.log(error));
  }, [page, searchQuery]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  return (
    <>
      <SearchImg onSubmit={handleFormSubmit} />
      <ImageGallery
        isLoading={isLoading}
        images={images}
        onLoadMore={onLoadMore}
      />
      <ToastContainer autoClose={3000} />
    </>
  );
};

// state = {
//   searchQuery: '',
//   images: [],
//   page: 1,
//   error: '',
//   isLoading: false,
//   largeImageURL: '',
//   amount: 12,
//   openModal: false,
// };

// componentDidUpdate(prevProps, prevState) {
//   const prevQuery = prevState.searchQuery;
//   const thisQuery = this.state.searchQuery;
//   if (prevQuery !== thisQuery || this.state.page !== prevState.page) {
//     this.fetchApi();
//   }
// }
