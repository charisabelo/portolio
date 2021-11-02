import "./ContactModal.scss";
import { GrFormClose } from "react-icons/gr";
import { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";
import emailjs from "emailjs";

const ContactModal = ({ showModal, setShowModal, openModal }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100rem)`,
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <div className="contact-modal" ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="contact-modal__content">
              <div className="contact-modal__icon-container">
                <GrFormClose
                  className="contact-modal__x-icon"
                  onClick={openModal}
                />
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};

export default ContactModal;
