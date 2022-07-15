import React, { useRef } from "react";
import ReactDOM from "react-dom";

import "./modal.scss";

const Modal = ({ setIsOpen, data }) => {
  const vidRef = useRef(null);
  return setIsOpen
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className='modal-package' onClick={() => setIsOpen(false)}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
              <section className='modal-content-body'>
                <video
                  ref={vidRef}
                  className='orca-video'
                  autoPlay
                  controls
                  poster
                  preload='metadata'
                  crossOrigin='anonymous'
                >
                  <source src={data} type='video/mp4' />
                </video>
              </section>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;
};

export default Modal;
