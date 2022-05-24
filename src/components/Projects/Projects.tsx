import Project from "../Project/Project";
import "./Projects.scss";
import { projectItems } from "./ProjectItems";

interface ProjectProps {}

interface itemObj {
  id: string;
  title: string;
  tech: techObject[];
  image: string;
  description: string;
  github: string | null;
  site: string;
}

interface techObject {
  id: string;
  name: string;
}

const Projects: React.FC<ProjectProps> = ({}) => {
  return (
    <div className="projects">
      {/* <h1 className="projects__header">
        <span>projects</span> 💻{" "}
      </h1> */}

      <div className="projects__main">
        {projectItems.map((item: itemObj) => {
          return (
            <div key={item.id} className="projects__container">
              <Project
                key={item.id}
                title={item.title}
                tech={item.tech}
                image={item.image}
                description={item.description}
                github={item.github || ""}
                site={item.site}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
