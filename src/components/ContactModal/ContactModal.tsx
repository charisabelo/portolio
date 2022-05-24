import "./ContactModal.scss";
import { GrFormClose } from "react-icons/gr";
import { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

interface ContactModalProps {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  openModal: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({
  showModal,
  setShowModal,
  openModal,
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const form = useRef<HTMLFormElement | null>(null);

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const REACT_APP_SERVICE_ID: string = process.env.REACT_APP_SERVICE_ID!;

  const REACT_APP_TEMPLATE_ID: string = process.env.REACT_APP_TEMPLATE_ID!;

  const fc = form.current!;

  const REACT_APP_USER_ID: string = process.env.REACT_APP_USER_ID!;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_SERVICE_ID,
        REACT_APP_TEMPLATE_ID,
        fc,
        REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    (e.target as HTMLFormElement).reset();
  };

  return (
    <>
      {showModal ? (
        <div className="contact-modal" ref={modalRef} onClick={closeModal}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="contact-modal__content">
              <div className="contact-modal__icon-container">
                <GrFormClose
                  className="contact-modal__x-icon"
                  onClick={openModal}
                />
              </div>
              <div className="contact-modal__main-container">
                <div className="contact-modal__header-container">
                  <h1 className="contact-modal__header">Contact</h1>
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
                      <label
                        htmlFor=""
                        className="contact-modal__message-label"
                      >
                        Message
                      </label>
                      <textarea
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
          </motion.div>
        </div>
      ) : null}
    </>
  );
};

export default ContactModal;
