import PropTypes from 'prop-types';
import React from 'react';
import { ImgItem, ImgPicture } from './ImageGalleryItem.styled.jsx';

const ImageGalleryItem = ({ images, openModal }) => {
  return (
    <>
      {images.map(({ largeImageURL, webformatURL, tags, id }) => (
        <ImgItem
          key={id}
          onClick={() => {
            openModal(largeImageURL, tags);
          }}
        >
          <ImgPicture src={webformatURL} alt={tags} />
        </ImgItem>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string,
  }),
};

export default ImageGalleryItem;
