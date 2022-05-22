import Project from "../Project/Project";
import "./Projects.scss";
import { projectItems } from "./ProjectItems";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects__header">
        <span>projects</span> 💻{" "}
      </h1>

      <div className="projects__main">
        {projectItems.map((item) => {
          return (
            <div key={item.id} className="projects__container">
              <Project key={item.id} className="projects__single" {...item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
