import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { GalleryBox, Btn } from './ImageGallery.styled.jsx';
import Loader from '../Loader/Loader';
import { ModalWindow } from '../Modal/Modal';

export class ImageGallery extends Component {
  state = {
    isModalOpen: false,
    largeImageURL: '',
    text: '',
  };

  tooglModal = () => {
    this.setState(({ isModalOpen }) => ({
      isModalOpen: !isModalOpen,
    }));
  };

  openModal = (url, text) => {
    this.tooglModal();
    this.setState({ largeImageURL: url, text: text });
  };
  render() {
    const { isModalOpen } = this.state;
    return (
      <>
        <GalleryBox>
          <ImageGalleryItem
            images={this.props.images}
            openModal={this.openModal}
          ></ImageGalleryItem>
        </GalleryBox>
        {this.props.isLoading && <Loader />}
        {this.props.images.length > 0 && (
          <Btn type="button" onClick={this.props.onLoadMore}>
            Load more
          </Btn>
        )}
        {isModalOpen && (
          <ModalWindow
            onClose={this.tooglModal}
            largeImg={this.state.largeImageURL}
            text={this.state.text}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  images: PropTypes.array,
  onLoadMore: PropTypes.func,
};
