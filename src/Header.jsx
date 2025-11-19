// Header.jsx
import React, { useState } from 'react';
import styles from './header.module.css';

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <div>
      <header className={styles.headerDiv}>
        <div className={styles.logoDiv}>Portfolio</div>

        <nav className={sidebar ? styles.navSidebar : styles.navbarDiv}>
          <ul className={styles.headerUl}>
            <li><a className={styles.headerA} href="#home">Home</a></li>
            <li><a className={styles.headerA} href="#projects">Projects</a></li>
            <li><a className={styles.headerA} href="#about">About</a></li>
            <li><a className={styles.headerA} href="#contact">Contact Me</a></li>
            <li><a className={styles.headerA} href="/Afshan Thayab Resume -FrontEndDev.pdf">Resume</a></li>
          </ul>
        </nav>

        <button 
          className={styles.hamburgerBtn} 
          onClick={() => setSidebar(!sidebar)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {sidebar && <div className={styles.overlayDiv} onClick={() => setSidebar(false)}></div>}
      </header>
    </div>
  );
}

export default Header;
