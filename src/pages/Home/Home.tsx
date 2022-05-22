import "./Home.scss";
import Header from "../../components/Header/Header";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <>
      <Header />
      <div className="home__project" id="projects">
        <Projects />
      </div>
    </>
  );
};

export default Home;
