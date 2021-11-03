import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__about-container">
          <h1 className="header__heading">🌺 aloha i'm char</h1>
          <p className="header__about">
            <span>I'm</span> a Full Stack / Front End Web Developer.
          </p>
          <p className="header__about">
            <span>Who</span> enjoys constructing solutions to problems.
          </p>
          <p className="header__about">
            <span>Currently</span> based out of 🌴 Hawaii, US and open <br /> to
            relocation or remote work.
          </p>
        </div>
      </div>
      <div className="header__right">
        <div className="header__tech-container">
          <div className="header__tech-padding">
            <div className="header__tech header__tech-html"></div>
          </div>
          <div className="header__tech-padding">
            <div className="header__tech header__tech-css"></div>
          </div>
          <div className="header__tech-padding">
            <div className="header__tech header__tech-js"></div>
          </div>
          <div className="header__tech-padding">
            <div className="header__tech header__tech-sass"></div>
          </div>
          <div className="header__tech-padding">
            <div className="header__tech header__tech-react"></div>
          </div>
          <div className="header__tech-padding">
            <div className="header__tech header__tech-nodejs"></div>
          </div>
          <div className="header__tech-padding">
            <div className="header__tech header__tech-express"></div>
          </div>
          <div className="header__tech-padding">
            <div className="header__tech header__tech-mysql"></div>
          </div>
          <div className="header__tech-padding">
            <div className="header__tech header__tech-git"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
