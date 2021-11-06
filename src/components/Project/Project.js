import "./Project.scss";
import { DiGithubBadge } from "react-icons/di";

const Project = (props) => {
  const { title, tech, image, description, github, site } = props;
  console.log(typeof image);
  return (
    <div className="project">
      <div
        className="project__photo"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="project__details">
        <div className="project__main">
          <div className="project__header">{title}</div>
          <div className="project__tech-container">
            <span className="project__tech-header">🛠 Tech Used:</span>
            {tech.map((item) => {
              return <span className="project__tech">{item}</span>;
            })}
          </div>
          <div className="project__description">{description}</div>
        </div>
        <div className="project__buttons">
          <a className="project__live-site" href={site} target="_blank">
            Live Site
          </a>
          {github && (
            <a className="project__github" href={github} target="_blank">
              <DiGithubBadge className="project__github-icon" />
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
