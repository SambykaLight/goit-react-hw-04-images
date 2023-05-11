import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modal, ImgModal } from './Modal.styled.jsx';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class ModalWindow extends Component {
  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  keyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <Modal>
          <ImgModal src={this.props.largeImg} alt={this.props.text} />
        </Modal>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  largeImg: PropTypes.string,
  text: PropTypes.string,
};
