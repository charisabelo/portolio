import "./Project.scss";
import { DiGithubBadge } from "react-icons/di";

interface ProjectProps {
  title: string;
  tech: itemObject[];
  image: string;
  description: string;
  github: string;
  site: string;
}

interface itemObject {
  id: string;
  name: string;
}

const Project: React.FC<ProjectProps> = (props) => {
  const { title, tech, image, description, github, site } = props;

  return (
    <section className="project">
      <div className="project--blur"></div>
      <div
        className="project__photo"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="project__details">
        <div className="project__main">
          <div className="project__header">{title}</div>
          <div className="project__tech-container">
            <span className="project__tech-header">Tech Used:</span>
            {tech.map((item: itemObject) => {
              return (
                <span key={item.id} className="project__tech">
                  {item.name}
                </span>
              );
            })}
          </div>
          <div className="project__description">{description}</div>
        </div>
        <div className="project__buttons">
          <a
            className="project__live-site"
            href={site}
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
          {github && (
            <a
              className="project__github"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <DiGithubBadge className="project__github-icon" />
              Github
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Project;
