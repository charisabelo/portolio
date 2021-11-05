import "./Navbar.scss";
import ContactModal from "../ContactModal/ContactModal";
import { useState } from "react";
import ResumeModal from "../ResumeModal/ResumeModal";
import { Link } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = ({ openModal, setShowModal, showModal }) => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(false);

  const openResumeModal = () => {
    setShowResumeModal((prev) => !prev);
  };

  const toggleMobileNav = () => {
    setShowNavLinks((prev) => !prev);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">char isabelo</div>
      <div
        className={
          showNavLinks ? "navbar__links-list active" : "navbar__links-list"
        }
        id={showNavLinks ? "mobile-nav" : ""}
      >
        <div className="navbar__link" onClick={openModal}>
          hire me.
        </div>
        <div className="navbar__link" onClick={openResumeModal}>
          resume.
        </div>
        <a href="#projects" className="navbar__link">
          projects.
        </a>
        <Link
          className="navbar__link"
          to={{
            pathname: "https://www.linkedin.com/in/charisabelo/",
          }}
          target="_blank"
        >
          linkedin.
        </Link>
        <Link
          className="navbar__link"
          to={{
            pathname: "https://github.com/charisabelo",
          }}
          target="_blank"
        >
          github.
        </Link>
      </div>

      {!showNavLinks ? (
        <VscThreeBars className="navbar__bars" onClick={toggleMobileNav} />
      ) : (
        <GrFormClose className="navbar__x" onClick={toggleMobileNav} />
      )}

      <ResumeModal
        showResumeModal={showResumeModal}
        setShowResumeModal={setShowResumeModal}
      />

      <ContactModal
        showModal={showModal}
        setShowModal={setShowModal}
        openModal={openModal}
      />
    </div>
  );
};

export default Navbar;
