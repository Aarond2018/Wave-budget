import React from 'react'

import styles from "./Terms.module.css"

export default function Terms() {
  return (
    <section className={`container ${styles.terms}`}>
      <h2>No more stress!</h2>
      <p>Our <a href="/">Terms & Conditions</a> are simple</p>
      <div className={styles.steps}>
        <div>
          <h4>1</h4>
          <p>Provide valid information</p>
        </div>
        <div>
          <h4>2</h4>
          <p>No outstanding loan, from any loan company or app</p>
        </div>
        <div>
          <h4>3</h4>
          <p>Provide your valid means of ID, for KYC verification, you need any of your national identity card</p>
        </div>
        <div>
          <h4>4</h4>
          <p>Make a down payment of 40% of the total price of the items you want to buy</p>
        </div>
        <div>
          <h4>5</h4>
          <p>Buy!
Spread the remain 60% over 16 weeks, pay at your convenient time within those periods</p>
        </div>
      </div>
    </section>
  )
}
