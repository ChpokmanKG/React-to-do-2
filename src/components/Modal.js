import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';

const Modal = ({title,Component}) => {

  const [open,setOpen] = useState(false);
  const history = useHistory();

  const changeState = () => setOpen(open => !open);
  const close = () => setOpen(false);

  const closeModal = () => {
    changeState()
    setTimeout(() => history.goBack(),200);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => {
      changeState()
    },100);

    window.addEventListener('popstate', close);

    return () => {
      clearTimeout(timeOut);
      window.removeEventListener('popstate',close);
    }
  },[]);

  return (
    <div className="modal-wrapper w-100 h-100 position-fixed" onClick={closeModal}>
      <div
        onClick={e => e.stopPropagation()}
        className="modal-wrapper__inner w-100 bg-white fixed-bottom p-3"
        style={{bottom: open ? '0' : '-100%'}}>

        <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
          <p className="mb-0">{title}</p>
          <span onClick={closeModal}>&times;</span>
        </div>

        <div>
          {Component && <Component {...{close: closeModal}}/>}
        </div>

      </div>
    </div>
  )
};

export default Modal;
