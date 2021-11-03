import "./ResumeModal.scss";
import { useRef, useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ResumeModal = ({ showResumeModal, setShowResumeModal }) => {
  const resumeRef = useRef();
  const [zoom, setZoom] = useState(150);

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
        </div>
      ) : null}
    </>
  );
};

export default ResumeModal;
