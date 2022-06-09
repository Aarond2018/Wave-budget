import React from 'react'
import styles from "./Hero.module.css"
import heroImage from "../../../Assets/hero-image.png"
import Button from '../../Button/Button'

export default function Hero() {
  return (
    <section className={`container ${styles.hero}`}>
      <div className={styles.hero__content}>
        <h1>Buy now, <span>Pay later..</span></h1>
        <p>Buy foods items, gadgets and household appliances, 
          cars, and others and pay small-small at zero 
          percent interest. If you're a seller <span>Wavebudget</span> makes 
          cashflow for your business, get immediate payment, 
          no waiting or chasing.. As a buyer If you're paying 
          or buying from any store then spread the cost over
          for easy Weekly or monthly installments..</p>
        <div className={styles.links}>
          <Button invert={true} link="/#info"><span>Learn more</span></Button>
          <Button link="/#form"><span>Sign up now</span></Button>
      </div>

      </div>
      <div className={styles.hero__image}>
        <img src={heroImage} alt="hero-image" />
      </div>
    </section>
  )
}
