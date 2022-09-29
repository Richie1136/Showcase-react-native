import styles from "../../styles/Global"


const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img className={`${styles.featureImg}`} src={iconUrl} alt='icon' />
    <p className={`${styles.iconText}`}>{iconText}</p>
  </div>
)

export default FeatureCard