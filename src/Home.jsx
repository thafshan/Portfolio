import React from 'react';
import { Linkedin, Instagram, Github } from 'lucide-react';
import styles from './home.module.css';

const Home = () => {
  return (
    <div id='home'>
      <section className={styles.homeSection}>
        <div className={styles.homeContent}>
          <h1 className={styles.homeHeading}>
            <span className={styles.w}>Hello, it's Me</span>
            <span className={styles.name}>Afshan Thayab Khan</span>
            <span className={styles.w}>And I'm a</span>
            <span className={styles.role}>Frontend Developer</span>
          </h1>
          <ul className={styles.socialList}>
            <li>
              <a className={styles.homeIcon} href="https://www.linkedin.com/in/iamafshaaan/">
                <Linkedin />
              </a>
            </li>
            <li>
              <a className={styles.homeIcon} href="https://www.instagram.com/iamafshx_xn/">
                <Instagram />
              </a>
            </li>
            <li>
              <a className={styles.homeIcon} href="https://github.com/thafshan">
                <Github />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Home;
