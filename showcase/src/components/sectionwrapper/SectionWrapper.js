import styles from '../../styles/Global'
// import assets from '../../assets'


const SectionWrapper = ({ title, description, showBtn, mockupImg, banner }) => {
  return (
    <div className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <h5>{banner}</h5>
      <img src={mockupImg} alt='mockup' />
    </div>
  )
}

export default SectionWrapper