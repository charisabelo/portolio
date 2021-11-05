import "./Project.scss";

const Project = () => {
  return (
    <div className="project">
      <div className="project__photo"></div>
      <div className="project__details">
        <div className="project__main">
          <div className="project__header">Island Traveler</div>
          <div className="project__tech-container">
            <span className="project__tech-header">🛠 Tech Used:</span>
            <span className="project__tech"> React</span>
            <span className="project__tech"> Javascript</span>
            <span className="project__tech"> CSS</span>
            <span className="project__tech"> SASS</span>
            <span className="project__tech"> Node.js</span>
            <span className="project__tech"> Express</span>
          </div>
          <div className="project__description">
            This Full Stack project is dedicated to my home island, Big Island,
            Hawaii. A personal travel planner that gives the client/customer
            ideas of things to do while here on vacation, but only features
            small, local, or heavily covid impacted businesses.{" "}
          </div>
        </div>
        <div className="project__buttons">
          <button className="project__live-site">Live Site</button>
          <button className="project__github">Github</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
