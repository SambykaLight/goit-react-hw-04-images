import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryBox, Btn } from './ImageGallery.styled.jsx';
import Loader from '../Loader/Loader';
import { ModalWindow } from '../Modal/Modal';

export const ImageGallery = props => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [text, setText] = useState('');

  const tooglModal = () => {
    setIsModalOpen(prevIsModalOpen => !prevIsModalOpen);
  };

  const openModal = (url, text) => {
    tooglModal();
    setLargeImageURL(url);
    setText(text);
  };

  return (
    <>
      <GalleryBox>
        <ImageGalleryItem
          images={props.images}
          openModal={openModal}
        ></ImageGalleryItem>
      </GalleryBox>
      {props.isLoading && <Loader />}
      {props.images.length > 0 && (
        <Btn type="button" onClick={props.onLoadMore}>
          Load more
        </Btn>
      )}
      {isModalOpen && (
        <ModalWindow
          onClose={tooglModal}
          largeImg={largeImageURL}
          text={text}
        />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string,
  }),
  onLoadMore: PropTypes.func,
};

// state = {
//   isModalOpen: false,
//   largeImageURL: '',
//   text: '',
// };
