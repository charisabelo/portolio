import "./ContactModal.scss";
import { GrFormClose } from "react-icons/gr";
import { useRef } from "react";
import { useSpring, animated } from "react-spring";
// import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { EmojiProvider, Emoji } from "react-apple-emojis";
import emojiData from "react-apple-emojis/lib/data.json";

const ContactModal = ({ showModal, setShowModal, openModal }) => {
  const modalRef = useRef();
  const form = useRef();

  // const animation = useSpring({
  //   config: {
  //     duration: 200,
  //   },
  //   opacity: showModal ? 1 : 0,
  //   transform: showModal ? `translateY(0%)` : `translateY(-100rem)`,
  // });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <>
      {showModal ? (
        <div className="contact-modal" ref={modalRef} onClick={closeModal}>
          {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}> */}
          <div className="contact-modal__content">
            <div className="contact-modal__icon-container">
              <GrFormClose
                className="contact-modal__x-icon"
                onClick={openModal}
              />
            </div>
            <div className="contact-modal__main-container">
              <div className="contact-modal__header-container">
                <h1 className="contact-modal__header">contact me</h1>
                <EmojiProvider data={emojiData}>
                  <Emoji name="love-letter" className="contact-modal__emoji" />
                </EmojiProvider>
              </div>

              <form
                ref={form}
                className="contact-modal__form"
                onSubmit={sendEmail}
              >
                <div className="contact-modal__subject-container">
                  <label htmlFor="" className="contact-modal__subject-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="contact-modal__subject"
                    name="subject"
                    placeholder="I would like to discuss a job"
                    required
                  />
                </div>
                <div className="contact-modal__name-container">
                  <label htmlFor="" className="contact-modal__name-label">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Patrick Star"
                    name="name"
                    className="contact-modal__firstname"
                    required
                  />
                </div>
                <div className="contact-modal__contact-container">
                  <div className="contact-modal__email-container">
                    <label htmlFor="" className="contact-modal__email-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="contact-modal__email"
                      name="email"
                      placeholder="patrickstar@gmail.com"
                      required
                    />
                  </div>
                  <div className="contact-modal__phone-container">
                    <label htmlFor="" className="contact-modal__phone-label">
                      Phone Number(optional)
                    </label>
                    <input
                      type="number"
                      className="contact-modal__phone"
                      name="phone"
                      placeholder="optional"
                    />
                  </div>
                  <div className="contact-modal__message-container">
                    <label htmlFor="" className="contact-modal__message-label">
                      Message
                    </label>
                    <textarea
                      type=""
                      className="contact-modal__message"
                      name="message"
                      placeholder="Write your message here..."
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="contact-modal__btn-container">
                  <button type="submit" className="contact-modal__btn">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* </motion.div> */}
        </div>
      ) : null}
    </>
  );
};

export default ContactModal;
