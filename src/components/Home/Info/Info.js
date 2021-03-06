import React, { Fragment } from 'react'
import ratingIcon from "../../../Assets/rating.svg"
import starIcon from "../../../Assets/star.svg"
import appleBadge from "../../../Assets/appleBadge.png"
import googleBadge from "../../../Assets/googleBadge.png"
import package_image from "../../../Assets/packgeImage.png"
import shopIcon from "../../../Assets/shopIcon.svg"
import peopleIcon from "../../../Assets/peopleIcon.svg"
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
        <div>
        <div className={`d-flex-a ${styles.cards}`}>
          <div>
            <img src={shopIcon} alt="cash_app_icon" />
            <h4><span>WAVEBUDGET</span> for merchants</h4>
            <p>Close the deal and get paid 
                instantly by Wavebudget, offering your 
                client payments spread 
                over 4 months by </p>
            </div>
          <div>
            <img src={peopleIcon} alt="clock_icon" />
            <h4><span>WAVEBUDGET</span> for members</h4>
            <p>Can’t pay for an invoice in one go? Spread over time to keep cash in your pocket and pay us later, over some months </p>
            </div>
          <div>
            <img src={calculatorIcon} alt="calculator_icon" />
            <h4><span>WAVEBUDGET</span> for everybody</h4>
            <p>Whether you're keen to get paid, or to spread out your bill repayments, Wavebudget makes it easy to understand </p>
            </div>
        </div>
        <p className={styles.notes}>Buy food items, gadgets and household appliances, cars, and others and pay small-small at zero percent interest. If you're a seller <span>Wavebudget</span> makes cash flow for your business, get immediate payment, no waiting or chasing. As a buyer If you're paying or buying from any store then spread the cost over for easy weekly or monthly installments.</p>
        </div>
      </section>
    </Fragment>
  )
}
