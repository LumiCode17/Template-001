import React from 'react'
import styles from "./StayFit.module.css";

const stayFit = () => {
  return (
    <div>
        <svg viewBox="0 0 240 80" xmlns="" >
            <text x="25" y="75" className={styles.fit}>fit!</text>
            <text x="45" y="35" className={styles.stay}>Stay</text>
        </svg>
    </div>
  )
}

export default stayFit