import React from 'react'
import styles from './home.module.css'


const home = () => {

  
  return (
    <div className={styles.homeDemo}>

        <section className={styles.showcase}>
          <h1 className={styles.head}>MBX</h1>
          <p className={styles.para}>Keeping fit is our business</p>
        </section>

    </div>
  )
}

export default home