import React from 'react';
import styles from './about.module.css';

const certificatesArray = [
  { image: '/images/CEH.png', name: 'Certified Ethical Hacker V12' },
  { image: '/images/cssC.png', name: 'Hacker Rank CSS Basics' },
  { image: '/images/craw.jpeg', name: 'Ethical Hacking and Countermeasures Certification' },
  { image: '/images/R-C.png', name: 'Hacker Rank React Basics' }, // can fill more certificates later
];

const About = () => {
  return (
    <div id='about' className={styles.container}>
      <h1 className={styles.heading}>About me</h1>
      <p className={styles.paragraph}>
        I’m Afshan Thayab Khan, a passionate BCA student with a keen interest in cybersecurity and web development. I have completed CEHv12 Practical training and gained hands-on experience in ethical hacking, network scanning, and penetration testing.
        <br /><br />
        On the web development side, I work with <span className={styles.highlight}>React JS</span>, <span className={styles.highlight}>JavaScript</span>, <span className={styles.highlight}>HTML</span>, <span className={styles.highlight}>CSS</span>, and <span className={styles.highlight}>Tailwind</span>, creating responsive and interactive projects. Currently, I’m building my portfolio from scratch to showcase projects that combine both security and web development skills, including AWS IAM projects and client-side attack simulations.
        <br /><br />
        I’m seeking internship opportunities where I can apply my knowledge, gain hands-on experience, and continue learning from real-world challenges in cybersecurity and web technologies.
        <br /><br />
        <strong>Skills & Tools:</strong>
        <br /><br />
        Cybersecurity: <span className={styles.highlight}>Penetration Testing</span>, <span className={styles.highlight}>Footprinting</span>, <span className={styles.highlight}>Vulnerability Scanning</span>, <span className={styles.highlight}>Kali Linux</span>, <span className={styles.highlight}>Nmap</span>, <span className={styles.highlight}>Wireshark</span>, <span className={styles.highlight}>Google Dorking</span>
        <br /><br />
        Web Development: <span className={styles.highlight}>React JS</span>, <span className={styles.highlight}>JavaScript</span>, <span className={styles.highlight}>HTML</span>, <span className={styles.highlight}>CSS</span>, <span className={styles.highlight}>Tailwind</span>
        <br /><br />
        Cloud & IAM: <span className={styles.highlight}>AWS Identity and Access Management</span>
      </p>

      <h1 className={styles.heading}>Certificates</h1>
      <div className={styles.certificates}>
        {certificatesArray.map((cert, index) => (
          <div key={index} className={styles.certificateCard}>
            {cert.image && (
              <img src={cert.image} alt={cert.name} className={styles.certificateImage} />
            )}
            <p className={styles.certName}>{cert.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
