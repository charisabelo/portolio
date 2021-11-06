import Project from "../Project/Project";
import "./Projects.scss";
import { projectItems } from "./ProjectItems";

const Projects = () => {
  console.log(projectItems);
  return (
    <div className="projects">
      <h1 className="projects__header">
        <span>projects</span> 💻{" "}
      </h1>

      <div className="projects__main">
        {projectItems.map((item) => {
          return (
            <div className="projects__container" key={item.id}>
              <Project className="projects__single" {...item} />
            </div>
          );
        })}
        {/* <div className="projects__container">
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
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
