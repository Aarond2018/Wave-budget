import React, { Fragment } from 'react'
import ratingIcon from "../../../Assets/rating.svg"
import starIcon from "../../../Assets/star.svg"
import appleBadge from "../../../Assets/appleBadge.png"
import googleBadge from "../../../Assets/googleBadge.png"
import package_image from "../../../Assets/packgeImage.png"
import cashAppIcon from "../../../Assets/cashappIcon.svg"
import clockIcon from "../../../Assets/clock.svg"
import calculatorIcon from "../../../Assets/calculator.svg"
import styles from "./Info.module.css"

export default function Info() {
  return (
    <Fragment>
      <section className={`container ${styles.info}`} id="info">
        <h2>Join more than 5 million people with Wavebuget account</h2>
        <div className={`d-flex-full ${styles.rating}`}>
          <p>Our customers say</p>
          <h4>Excellent</h4>
          <img src={ratingIcon} alt="rating-icon" />
          <p>4.4 out of 5 based on 21,509 <span>reviews</span></p>
          <div className={styles.star}>
            <img src={starIcon} alt="star-icon" />
            <p>Trustpilot</p>
          </div>
        </div>
        <div className={`d-flex-j ${styles.badges}`}>
          <img src={appleBadge} alt="apple-badge" />
          <img src={googleBadge} alt="google-badge" />
        </div>
      </section>
      <section className={`container ${styles.packages}`}>
        <img src={package_image} alt="package_image" />
        <div className={`d-flex-a ${styles.cards}`}>
          <div>
            <img src={cashAppIcon} alt="cash_app_icon" />
            <h4>Wavebudget for merchants</h4>
            <p>Close the deal and get paid 
                instantly by Wavebudget, offering your 
                client payments spread 
                over 4 months by </p>
            </div>
          <div>
            <img src={clockIcon} alt="clock_icon" />
            <h4>Wavebudget for merchants</h4>
            <p>Close the deal and get paid 
                instantly by Wavebudget, offering your 
                client payments spread 
                over 4 months by </p>
            </div>
          <div>
            <img src={calculatorIcon} alt="calculator_icon" />
            <h4>Wavebudget for merchants</h4>
            <p>Close the deal and get paid 
                instantly by Wavebudget, offering your 
                client payments spread 
                over 4 months by </p>
            </div>
        </div>
      </section>
    </Fragment>
  )
}
