import "./ResumeModal.scss";
import React, { useRef } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { RiCloseFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CgClose } from "react-icons/cg";

interface ResumeProps {
  showResumeModal: boolean;
  setShowResumeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResumeModal: React.FC<ResumeProps> = ({
  showResumeModal,
  setShowResumeModal,
}) => {
  const resumeRef = useRef<HTMLDivElement | null>(null);

  const closeResumeModal = (e: React.MouseEvent<HTMLDivElement>) => {
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

              <RiCloseFill
                className="resume-modal__exit-icon"
                onClick={exitButton}
                style={{ fill: "#000" }}
              />
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  );
};

export default ResumeModal;
