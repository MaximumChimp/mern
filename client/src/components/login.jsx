import React, { useState } from "react";
import "../assets/css/Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="custom-btn btn-15">
        Join Room
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2 >Login</h2>
            <p>Hello Friend! Please Login your credentials!</p>
            <div className="Modal-InputField">
              <input type="text" placeholder="Username or Email Address"/>
              <input type="text" placeholder="Password"/>
              <a href="">Doesn't have an account?</a>
              <a href="">Forgot Password!</a>
            </div>
            <div className="btn-cont">
              <button className="btn" id="login-btn">
                Login
              </button>
              <button className="btn" id="close-btn" onClick={toggleModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
}