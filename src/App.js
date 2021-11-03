import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar
          openModal={openModal}
          setShowModal={setShowModal}
          showModal={showModal}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
