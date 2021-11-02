import "./Navbar.scss";
import ContactModal from "../ContactModal/ContactModal";

const Navbar = ({ openModal, setShowModal, showModal }) => {
  return (
    <div className="navbar">
      <div className="navbar__logo">char isabelo</div>
      <div className="navbar__link" onClick={openModal}>
        hire me.
      </div>
      <ContactModal
        showModal={showModal}
        setShowModal={setShowModal}
        openModal={openModal}
      />
    </div>
  );
};

export default Navbar;
