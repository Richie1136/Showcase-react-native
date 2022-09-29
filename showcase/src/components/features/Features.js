import styles from "../../styles/Global"


const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>Technologies</h1>
          <p className={`${styles.h1Text} ${styles.whiteText}`}>ProNef has been developed using a cross-platform technology, React Native.</p>
        </div>
      </div>
    </div>
  )
}

export default Features