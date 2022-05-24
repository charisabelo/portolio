import "./Header.scss";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSass,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMysql } from "react-icons/si";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__about-container">
          <h1 className="header__heading">Aloha I'm Char</h1>
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
      <div className="header__mid">
        <div className="header__arrow-container">
          <a href="#projects" className="header__link">
            <MdKeyboardArrowDown className="header__arrow-icon" />
          </a>
        </div>
      </div>
      <div className="header__right">
        <div className="header__tech-container">
          <svg width="0" height="0">
            <linearGradient
              id="blue-gradient"
              x1="100%"
              y1="100%"
              x2="0%"
              y2="0%"
            >
              <stop stopColor="#b621fe" offset="0%" />
              <stop stopColor="#1fd1f9" offset="100%" />
            </linearGradient>
          </svg>

          <div className="header__tech-icon">
            <FaHtml5 style={{ fill: "url(#blue-gradient)" }} />
          </div>
          <div className="header__tech-icon">
            <FaCss3Alt style={{ fill: "url(#blue-gradient)" }} />
          </div>
          <div className="header__tech-icon">
            <FaSass
              className="header__sass"
              style={{ fill: "url(#blue-gradient)" }}
            />
          </div>
          <div className="header__tech-icon">
            <FaJs style={{ fill: "url(#blue-gradient)" }} />
          </div>
          <div className="header__tech-icon">
            <div className="header__typescript--background">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="2 2 60 60"
                width="130px"
                height="130px"
              >
                <polygon
                  fill="#000"
                  points="27.49,22 14.227,22 14.227,25.264 18.984,25.264 18.984,40 22.753,40 22.753,25.264 27.49,25.264"
                />
                <path
                  fill="#000"
                  d="M39.194,26.084c0,0-1.787-1.192-3.807-1.192s-2.747,0.96-2.747,1.986 c0,2.648,7.381,2.383,7.381,7.712c0,8.209-11.254,4.568-11.254,4.568V35.22c0,0,2.152,1.622,4.733,1.622s2.483-1.688,2.483-1.92 c0-2.449-7.315-2.449-7.315-7.878c0-7.381,10.658-4.469,10.658-4.469L39.194,26.084z"
                />
              </svg>
            </div>
          </div>
          <div className="header__tech-icon">
            <FaReact style={{ fill: "url(#blue-gradient)" }} />
          </div>
          <div className="header__tech-icon">
            <div className="header__nodejs--container">
              <DiNodejs
                style={{ fill: "url(#blue-gradient)" }}
                className="header__nodejs"
              />
            </div>
          </div>

          <div className="header__tech-icon">
            <SiExpress style={{ fill: "url(#blue-gradient)" }} />
          </div>

          <div className="header__tech-icon">
            <SiMysql
              className="header__mysql"
              style={{ fill: "url(#blue-gradient)" }}
            />
          </div>
          <div className="header__tech-icon">
            <FaPython
              className="header__python"
              style={{ fill: "url(#blue-gradient)" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
