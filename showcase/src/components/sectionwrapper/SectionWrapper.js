import styles from '../../styles/Global'
import Button from '../button/Button'
import expo from '../../assets/expo.png'


const SectionWrapper = ({ title, description, showBtn, mockupImg, banner }) => {
  return (
    <div className={`min-h-screen ${styles.section} ${styles.bgWhite} ${banner}`}>
      <div className={`flex items-center ${styles.boxClass} w-11/12 sm:w-full minmd:3/4`}>
        <div className={`${styles.descDiv} fadeLeftMini`}>
          <h1 className={`${styles.h1Text}`}>{title}</h1>
          <p className={`${styles.descriptionText}`}>{description}</p>
          {showBtn && <Button assetUrl={expo} link="deployed nft marketplace" />}
        </div>
        <div className={`flex-1 ${styles.flexCenter} p-8 sm:px-0`}>
          <img className={`${styles.sectionImg}`} src={mockupImg} alt='mockup' />

        </div>
      </div>
    </div>
  )
}

export default SectionWrapper