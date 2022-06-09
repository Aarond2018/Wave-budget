import React from 'react'
import Button from '../../Button/Button'

import styles from './Benefits.module.css'

export default function Benefits() {
  return (
    <section className={`container ${styles.benefits}`}>
      <div className={styles.benefits__cta}>
        <h2>Why should you choose <span>Wavebudget</span>?</h2>
        <p>Here are top 4 reasons among many others why you should use Wavebudget wallets as your mobile money/payments option for your transactions.</p>
        <Button invert={true} link="/#info"><span>Learn more</span></Button>
      </div>
      <div className={styles.benefits__detail}>
        <div>
          <h5>Easy to use</h5>
          <p>We are introducing the Wavebudget App, with an elegant look, and exciting features, to give you convenient spending over your buget without money</p>
          <h1>01</h1>
        </div>
        <div>
          <h5>Fast Payments</h5>
          <p>Providing a fast and convenient payment method for your returning customers. Make it easy for them to pay with one click.</p>
          <h1>02</h1>
        </div>
        <div>
          <h5>0% Interests</h5>
          <p>We offers our custpmers with all thier transaction and payment on 0% interests, our platform takes nothig away from you.</p>
          <h1>03</h1>
        </div>
        <div>
          <h5>100% Secure</h5>
          <p>Giving your customers peace of mind while transacting with you is our top priority – from securing your payment data to ensuring our infrastructure processes millions of payments</p>
          <h1>04</h1>
        </div>
      </div>
    </section>
  )
}
