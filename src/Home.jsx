import React from 'react';
import { Linkedin, Instagram, Github } from 'lucide-react';
import styles from './home.module.css';

const Home = () => {
  return (
    <div id='home'>
      <section className={styles.homeSection}>
        <div className={styles.homeLeft}>
          <h1 className={styles.homeHeading}>
            <span>Hello, it's Me</span>
            <span className={styles.name}>Afshan Thayab Khan</span>
            <span>And I'm a</span>
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
        <div className={styles.homeRight}>
          <img className={styles.homeImg} src="/images/PFP.png" alt="photo" />
        </div>
      </section>
    </div>
  );
};

export default Home;
