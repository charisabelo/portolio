import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

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
        <div className="app__main">
          <Switch>
            <Route path="/" exact component={Home}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
