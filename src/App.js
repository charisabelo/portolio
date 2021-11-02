import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      <Navbar
        openModal={openModal}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </div>
  );
}

export default App;
