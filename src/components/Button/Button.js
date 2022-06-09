import React from 'react'
import styles from "./Button.module.css"

export default function Button(props) {
  return (
    <a href={props.link} className={`${styles.link} ${props.invert ? styles.invert : ""}`}>
      {props.children}
    </a>
  )
}
