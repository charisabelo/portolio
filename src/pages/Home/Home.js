import "./Home.scss";
import Header from "../../components/Header/Header";
import Project from "../../components/Project/Project";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home__project" id="project">
        <Project />
      </div>
    </>
  );
};

export default Home;
