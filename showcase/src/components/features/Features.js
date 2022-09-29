import styles from "../../styles/Global"
import FeatureCard from "../featurecard/FeatureCard"
import reactImg from '../../assets/react.png'
import javaScriptImg from '../../assets/javascript.png'


const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>ProNef has been developed using a cross-platform technology, React Native.</p>
        </div>
        <div className={`${styles.flexWrap}`}>
          <FeatureCard iconText="React Native" iconUrl={reactImg} />
          <FeatureCard iconText="JavaScript" iconUrl={javaScriptImg} />
        </div>
      </div>
    </div>
  )
}

export default Features