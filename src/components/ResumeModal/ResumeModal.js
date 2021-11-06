import "./ResumeModal.scss";
import { useRef } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ResumeModal = ({ showResumeModal, setShowResumeModal }) => {
  const resumeRef = useRef();

  const closeResumeModal = (e) => {
    if (resumeRef.current === e.target) {
      setShowResumeModal(false);
    }
  };

  const exitButton = () => {
    setShowResumeModal(false);
  };

  return (
    <>
      {showResumeModal ? (
        <div
          className="resume-modal"
          ref={resumeRef}
          onClick={closeResumeModal}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="resume-modal__img">
              <Link
                to="/files/CharIsabeloResume(SWE).pdf"
                className="resume-modal__download-btn"
                target="_blank"
                download
              >
                <AiOutlineDownload className="resume-modal__icon" />
                DOWNLOAD
              </Link>
              <button className="resume-modal__exit-btn" onClick={exitButton}>
                <RiCloseFill className="resume-modal__exit-icon" />
              </button>
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  );
};

export default ResumeModal;
