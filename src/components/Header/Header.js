import React, { useState } from 'react'
import mainLogo from "../../Assets/main-logo.svg"
import toggleBar from "../../Assets/toggle-bar.svg"
import MobileNav from '../MobileNav/MobileNav'
import styles from "./Header.module.css"


export default function Header() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <header className={styles.header}>
      {openModal && <MobileNav setOpenModal={setOpenModal} />}
      <div className={`container d-flex-a ${styles.main_nav}`}>
        <div>
          <img src={mainLogo} alt="main-logo" />
          <ul>
            <li><a href="#info">Personal</a></li>
            <li><a href="#info">Business</a></li>
          </ul>
        </div>
        <ul>
          <li><a href="#">Developers</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Innovators</a></li>
          <li><a href="#about">About us</a></li>
        </ul>
        <ul>
          <li><a href="#info">Get started</a></li>
          <li className={styles.cta}><a href="#form">Sign up</a></li>
        </ul>
        <div className={styles.toggle_bar} onClick={() => setOpenModal(true)}>
          <img src={toggleBar} alt="" />
        </div>
      </div>
    </header>
  )
}
