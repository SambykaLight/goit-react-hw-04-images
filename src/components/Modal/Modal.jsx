import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Modal, ImgModal } from './Modal.styled.jsx';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const ModalWindow = ({ onClose, largeImg, text }) => {
  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const keyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', keyDown);
    return () => {
      window.removeEventListener('keydown', keyDown);
    };
  }, [onClose]);

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <Modal>
        <ImgModal src={largeImg} alt={text} />
      </Modal>
    </Overlay>,
    modalRoot
  );
};

Modal.propTypes = {
  largeImg: PropTypes.string,
  text: PropTypes.string,
};

// componentWillUnmount() {
//   window.removeEventListener('keydown', this.keyDown);
// }

// componentDidMount() {
//   window.addEventListener('keydown', this.keyDown);
// }
