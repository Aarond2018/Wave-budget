import React from 'react'
import aboutImage from "../../../Assets/about-section-img.png"
import styles from "./About.module.css"

export default function About() {
  return (
    <section className={`container ${styles.about}`} id="about">
      <h4>About Us</h4>
      <h1>One app for all things buy and pay later</h1>
      <p>From your day-day spending, to planning for your future with savings and investments, <span>Wavebuget</span> get you more help from your money to plan ahead.</p>
      <div className="d-flex-j"><a href="/#form">Use Wavebudget Now</a></div>

      <div className={styles.stats}>
        <div>
          <h1>2M <span>+</span></h1>
          <p>Personal users</p>
        </div>
        <div>
          <h1>600 <span>+</span></h1>
          <p>Business users</p>
        </div>
        <div>
          <h1>4.4<span>
          <svg width="15" height="18" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="black"/>
          </svg>
            </span></h1>
          <p>App rating</p>
        </div>
      </div>

      <div className={styles.about__main}>
        <div className={`d-flex-j ${styles.about__text}`}>
          <p><span>Wavbudget</span> is a fund recycling platform that helps employees and small businesses build and manage wealth by providing them with BNPL Services and safe investment opportunities.</p>
          <p>Across our personal and business accounts, we help customers improve their financial health, give them more control, and connect people seamlessly across the nation</p>
        </div>
        <div className={styles.about__image}>
          <img src={aboutImage} alt="about-section-image" />
        </div>
      </div>
    </section>
  )
}
