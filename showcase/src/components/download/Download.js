import styles from "../../styles/Global"


const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the Source Code</h1>
          <p>Get the full source code on GitHub</p>
        </div>
      </div>
    </div>
  )
}

export default Download