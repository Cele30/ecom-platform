import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Modal({ renderContent, width, isOpen = false }) {
  // const [isOpen, setOpen] = useState(open);

  // const closeModal = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  return (
    isOpen &&
    ReactDOM.createPortal(
      <div className="fixed z-50 top-0 left-0 h-full w-full">
        <div className="min-h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div
            className="relative w-full bg-white p-10"
            style={{ maxWidth: `${width}px` }}
          >
            {renderContent()}
          </div>
        </div>
      </div>,
      document.getElementById('root')
    )
  );
}

export default Modal;
