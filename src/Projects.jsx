import React from 'react';
import styles from './projects.module.css';

const ProjectCard = ({ image, name, description, liveLink }) => (
  <div className={styles.projectCard}>
    <img src={image} alt={name} className={styles.projectImage} />
    <div className={styles.projectInfo}>
      <h3 className={styles.projectName}>{name}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <a 
        className={styles.projectLink} 
        href={liveLink} 
        target="_blank"
        rel="noopener noreferrer"
      >Live Demo</a>
    </div>
  </div>
);

const Projects = () => {
  // Your arrays...
  const reactProjectsArray = [
  {
    image: '/images/Fetch.png',
    name: 'Fetch API ',
    description: 'I built a responsive Products App using React JS and Fetch API JS Function',
    liveLink: 'https://assisment-5.netlify.app/'
  },
    {
    image: '/images/notes-app.png',
    name: 'Notes App Project',
    description: 'I built a responsive Notes App using React JS and Tailwind CSS',
    liveLink: 'https://notes-app-reactjs-byafshan.netlify.app/'
  },
  {
    image: '/images/UI.png',
    name: 'UI Project',
    description: 'A modern and fully responsive UI built with React JS and Tailwind CSS',
    liveLink: 'https://ui-proj1.netlify.app/'
  },
  {
    image: '/images/Job-Card.png',
    name: 'Job Card Project',
    description: 'A simple and dynamic Job Card application',
    liveLink: 'https://jobcardproject.netlify.app/'
  }
];

const JSProjectsArray = [
  {
    image: '/images/Snake-game.png',
    name: 'Snake Game',
    description: 'Developed a fully functional, responsive Snake Game using React JS and CSS Grid, featuring dynamic block sizing for different screen sizes.',
    liveLink: 'https://snake-game-react-js-by-afshan.netlify.app/'
  },
  {
    image: '/images/X-O.png',
    name: 'TIC-TAC-TOE',
    description: 'Excited to share that Ive created a small interactive game using HTML, CSS, and JavaScript!',
    liveLink: 'https://mini-game-x.netlify.app/'
  },
];
const HTMLProjectsArray = [
  {
    image: '/images/Laundry.png',
    name: 'Laundry Site',
    description: 'Developed a fully responsive Shoping Cart website using HTML, CSS, JS ',
    liveLink: 'https://laundryprojectafshan.netlify.app/'
  },
  {
    image: '/images/Food.png',
    name: 'Omni-Foods',
    description: 'Developed a fully responsive food delivery website using HTML, CSS',
    liveLink: 'https://omni-foodbyafshan.netlify.app/'
  },
  {
    image: '/images/computer.png',
    name: 'Unique Computers',
    description: 'Currently Maintaing and developing the site for a local shop',
    liveLink: 'https://uniquecomputersrampur.netlify.app/'
  }
];

return (
  <div id='projects' className={styles.projectsSection}>
    <div className={styles.projectCategory}>
      <div className={styles.categoryHeader}>
        <img src="/images/react.jpeg" alt="ReactJS Projects" />
        <h1>ReactJS Projects</h1>
      </div>
      <div className={styles.cardsScrollWrapper}>
        <div className={styles.cardsRow}>
          {reactProjectsArray.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </div>

    <div className={styles.projectCategory}>
      <div className={styles.categoryHeader}>
        <img src="/images/JS.png" alt="JavaScript" />
        <h1>JavaScript Mini-Games</h1>
      </div>
      <div className={styles.cardsScrollWrapper}>
        <div className={styles.cardsRow}>
          {JSProjectsArray.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </div>

    <div className={styles.projectCategory}>
      <div className={styles.categoryHeader}>
        <img src="/images/HTML.png" alt="HTML Projects" />
        <img src="/images/CSS.jpeg" alt="CSS Projects" />
        <h1>HTML and CSS Starting Projects</h1>
      </div>
      <div className={styles.cardsScrollWrapper}>
        <div className={styles.cardsRow}>
          {HTMLProjectsArray.map((proj, idx) => (
            <ProjectCard key={idx} {...proj} />
          ))}
        </div>
      </div>
    </div>
  </div>
);
};

export default Projects;
