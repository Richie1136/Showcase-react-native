import styles from "../../styles/Global"


const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img className={`${styles.featureImg}`} src={iconUrl} alt='icon' />
  </div>
)

export default FeatureCard