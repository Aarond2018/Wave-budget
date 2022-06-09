import React from 'react'
import { useForm } from "react-hook-form";
import styles from "./Form.module.css"

export default function Form() {
  const { register, handleSubmit } = useForm();

  const onFormSubmit = data => {
    //data is the form data object
    console.log(data)
  }

  return (
    <form className={`container ${styles.form_section}`} onSubmit={handleSubmit(onFormSubmit)} id="form" >
      <h3>Join our waitlist, don't miss any latest news</h3>
      <p>Enter your Information below and join our growing platform today</p>
      <div className={styles.form}>
        <div>
          <input type="text" placeholder="Full name" required {...register("full_name")} />
        </div>
        <div>
          <input type="text" placeholder="Phone number" required {...register("phone_number")} />
        </div>
        <div>
          <input type="text" placeholder="Email address" required {...register("email")} />
        </div>
        <div>
          <input type="text" placeholder="Business name" {...register("business_name")} />
        </div>
        <div>
          <input type="text" placeholder="Home address" {...register("address")} />
        </div>
        <div>
          <textarea type="text" placeholder="Message/Question" rows="4" {...register("message")} />
        </div>
      </div>
      <div className={styles.form_checkbox}>
          <input type="checkbox" {...register("terms")} required />
          <p>I agreed having Wavebudget collect my personal information</p>
        </div>
      <button className={styles.btn}>Join now</button>
    </form>
  )
}
