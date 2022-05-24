import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

const App: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="app">
      <div className="app__body">
        <BrowserRouter>
          <Navbar
            openModal={openModal}
            setShowModal={setShowModal}
            showModal={showModal}
          />
          <div className="app__main">
            <Switch>
              <Route path="/" exact component={Home}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
