import React from 'react'
import styles from './SocialIcons.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
/* import { faBook } from '@fortawesome/free-solid-svg-icons' */
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' 


const SocialIcons = () => {
    
  return (
    <div>
        <div className={styles.sectB}>
          <a href="#" target="_blank" rel="noreferrer" className={styles.icon11}><i class="fab fa-youtube-square"></i></a>
          <a href="#" target="_blank" rel="noreferrer" className={styles.icon12}><i class="fab fa-instagram-square"></i></a>
          <a href="#" target="_blank" rel="noreferrer" className={styles.icon13}><i class="fab fa-facebook-square"></i></a>
          <a href="#" target="_blank" rel="noreferrer" className={styles.icon14}><i class="fab fa-tiktok"></i></a>
          <a href="#"><FontAwesomeIcon icon={brands('github')} className={styles.icon13}/> </a>
          <a href="#"><FontAwesomeIcon icon={brands('linkedin')} className={styles.icon13}/> </a>


          {/* other way of calling fontAwesome */}
          {/* <FontAwesomeIcon icon={faBook} className={styles.icon}></FontAwesomeIcon> */}
          {/* <FontAwesomeIcon icon={faBook} className={styles.icon1}></FontAwesomeIcon> */}
          {/* <FontAwesomeIcon icon={faBook} className={styles.icon2}></FontAwesomeIcon> */}
          {/* <FontAwesomeIcon icon={faBook} className={styles.icon3}></FontAwesomeIcon> */}
        </div>
    </div>
  )
}

export default SocialIcons