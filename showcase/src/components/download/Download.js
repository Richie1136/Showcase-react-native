import styles from "../../styles/Global"
import scene from '../../assets/scene.png'


const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
          <p className={`${styles.pText} ${styles.pText}`}>Get the full source code on GitHub</p>
        </div>
        <button className={`${styles.btnPrimary}`}><a href="https://github.com/Richie1136/Showcase-react-native/tree/master/showcase/src" target="_blank" rel="noreferrer">Source Code</a></button>
        <div className={`${styles.flexCenter}`}>
          <img src={scene} alt="download png" className={`${styles.fullImg}`} />
        </div>
      </div>
    </div>
  )
}

export default Download