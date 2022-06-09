import React from 'react'
import logoDark from "../../Assets/logo-dark.svg"
import Button from '../Button/Button'
import styles from "./Footer.module.css"
import fbIcon from "../../Assets/fb-icon.svg"
import twitterIcon from "../../Assets/twitter-icon.svg"
import instaIcon from "../../Assets/insta-icon.svg"
import phoneIcon from "../../Assets/phone-icon.svg"
import mailIcon from "../../Assets/mail-icon.svg"

export default function Footer() {
  return (
    <footer className={`container ${styles.footer}`}>
      <img src={logoDark} alt="main-logo-dark" />
      <ul className={styles.footer__items}>
        <li>
          <div><Button link="/#form"><span>Join now</span></Button></div>
          <ul className={styles.social_media}>
            <li><img src={fbIcon} alt="fb-icon" /><p>thewavebudget</p></li>
            <li><img src={twitterIcon} alt="twitter-icon" /><p>thewavebudget</p></li>
            <li><img src={instaIcon} alt="instagram-icon" /><p>thewavebudget</p></li>
            <li><img src={phoneIcon} alt="phone-icon" /><p>+234 813 796 0202</p></li>
            <li><img src={mailIcon} alt="mail-icon" /><p>mail@wavebuget.com</p></li>
          </ul>
        </li>
        <li>
          <h4>WAVEBUDGET</h4>
          <ul>
            <li><a href="/">Company</a></li>
            <li><a href="/">Business</a></li>
            <li><a href="/">Personal</a></li>
            <li><a href="/">About us</a></li>
            <li><a href="/">The Team</a></li>
            <li><a href="/">Career</a></li>
          </ul>
        </li>
        <li>
          <h4>Product</h4>
          <ul>
            <li><a href="/">About us</a></li>
            <li><a href="/">T & C</a></li>
            <li><a href="/">Privacy & Policy</a></li>
            <li><a href="/">Plans</a></li>
          </ul>
        </li>
        <li>
          <h4>Resources</h4>
          <ul>
            <li><a href="/">Help Desk</a></li>
            <li><a href="/">Contact us</a></li>
            <li><a href="/">Developer</a></li>
            <li><a href="/">API</a></li>
            <li><a href="/">Locations</a></li>
          </ul>
        </li>
      </ul>
    </footer>
  )
}
