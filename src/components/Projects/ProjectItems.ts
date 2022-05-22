export const projectItems: {
  id: string;
  title: string;
  tech: { id: string; name: string }[];
  image: string;
  description: string;
  github: string | null;
  site: string;
}[] = [
  {
    id: "1",
    title: "Island Traveler",
    tech: [
      { id: "1", name: "React" },
      { id: "2", name: "Javascript" },
      { id: "3", name: "CSS" },
      { id: "4", name: "SASS" },
      { id: "5", name: "Node.js" },
      { id: "6", name: "Express" },
      { id: "7", name: "REST API" },
    ],
    image: "/files/site.png",
    description:
      "Project is dedicated to my home island. A travel planner that gives the client/customer ideas of things to do while here on vacation. Only featuring small, local, or heavily covid impacted businesses.",
    github: "https://github.com/charisabelo/hi-traveler",
    site: "https://6ae900-netlify.netlify.app/",
  },
  {
    id: "2",
    title: "Web Portfolio",
    tech: [
      { id: "1", name: "React" },
      { id: "2", name: "Javascript" },
      { id: "3", name: "CSS" },
      { id: "4", name: "SASS" },
      { id: "5", name: "EmailJS" },
      { id: "6", name: "React Router" },
      { id: "7", name: "React Spring" },
    ],
    image: "/files/portfolio.png",
    description:
      "My personal portfolio which features more about myself, what technologies I've worked with, and what projects I've done.",
    github: "https://github.com/charisabelo/portolio",
    site: "https://charisabelo.com",
  },
  {
    id: "3",
    title: "Brainflix",
    tech: [
      { id: "1", name: "React" },
      { id: "2", name: "Javascript" },
      { id: "3", name: "CSS" },
      { id: "4", name: "SASS" },
      { id: "5", name: "Node.js" },
      { id: "6", name: "Express" },
    ],
    image: "/files/brainflix.png",
    description:
      "I received mock-ups and style guides for the design, then I implemented a backend using Node JS and Express to retrieve photos and data(comments, description, channel, etc).",
    github: null,
    site: "https://nifty-tereshkova-80d3a1.netlify.app/",
  },
  {
    id: "4",
    title: "Horoscope App",
    tech: [
      { id: "1", name: "Javascript" },
      { id: "2", name: "CSS" },
      { id: "3", name: "SASS" },
      { id: "4", name: "HTML" },
      { id: "5", name: "Web API" },
    ],
    image: "/files/horoscope.png",
    description:
      "During a 16-hour Hackathon, I partnered with another developer to design and create a horoscope app that pulls in data from a Web API to showcase your daily horoscope, compatibility, and lucky numbers.",
    github: "https://github.com/charisabelo/horoscope-generator",
    site: "https://charisabelo.github.io/horoscope-generator/",
  },
  {
    id: "5",
    title: "Bandsite",
    tech: [
      { id: "1", name: "Javascript" },
      { id: "2", name: "CSS" },
      { id: "3", name: "SASS" },
      { id: "4", name: "HTML" },
      { id: "5", name: "Web API" },
    ],
    image: "/files/bandsite.png",
    description:
      "Project that utilizes HTML, CSS/SASS, Javascript, and a Web API. I programmed and recreated a mock-up. Then pulled data from an api to dynamically add a shows list and comments. ",
    github: null,
    site: "https://charisabelo-08eb7b.netlify.app/",
  },
];
