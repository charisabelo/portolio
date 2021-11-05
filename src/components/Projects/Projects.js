import Project from "../Project/Project";
import "./Projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects__header">
        <span>projects</span> 💻{" "}
      </h1>

      <div className="projects__main">
        <div className="projects__container">
          <Project className="projects__single" />
        </div>
        <div className="projects__container">
          <Project className="projects__single" />
        </div>
        <div className="projects__container">
          <Project className="projects__single" />
        </div>
        <div className="projects__container">
          <Project className="projects__single" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
