import styles from "../../styles/Global"


const FeatureCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>{iconText}</div>
)

export default FeatureCard