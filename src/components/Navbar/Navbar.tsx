import "./Navbar.scss";
import ContactModal from "../ContactModal/ContactModal";
import { useState } from "react";
import ResumeModal from "../ResumeModal/ResumeModal";
import { Link } from "react-router-dom";
import { CgClose } from "react-icons/cg";
import { VscThreeBars } from "react-icons/vsc";
import { SiLinkedin, SiGithub } from "react-icons/si";

interface NavbarProps {
  openModal: () => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

const Navbar: React.FC<NavbarProps> = ({
  openModal,
  setShowModal,
  showModal,
}) => {
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
      <div className="navbar__logo">Char Isabelo</div>
      <div
        className={
          showNavLinks ? "navbar__links-list active" : "navbar__links-list"
        }
        id={showNavLinks ? "mobile-nav" : ""}
      >
        <div className="navbar__link" onClick={openModal}>
          Hire Me
        </div>
        <div className="navbar__link" onClick={openResumeModal}>
          Resume
        </div>

        <Link
          className="navbar__link"
          to={{
            pathname: "https://www.linkedin.com/in/charisabelo/",
          }}
          target="_blank"
        >
          <SiLinkedin className="navbar__linkedin" />
        </Link>
        <Link
          className="navbar__link"
          to={{
            pathname: "https://github.com/charisabelo",
          }}
          target="_blank"
        >
          <SiGithub className="navbar__github" />
        </Link>
      </div>

      {!showNavLinks ? (
        <VscThreeBars className="navbar__bars" onClick={toggleMobileNav} />
      ) : (
        <CgClose className="navbar__x" onClick={toggleMobileNav} />
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
