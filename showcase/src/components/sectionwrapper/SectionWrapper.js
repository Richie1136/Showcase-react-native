import styles from '../../styles/Global'
import Button from '../button/Button'
import expo from '../../assets/expo.png'


const SectionWrapper = ({ title, description, showBtn, mockupImg, banner, reverse }) => {
  return (
    <div className={`min-h-screen ${styles.section} ${reverse ? styles.bgWhite : styles.bgPrimary} ${banner}`}>
      <div className={`flex items-center ${reverse ? styles.boxReverseClass : styles.boxClass} w-11/12 sm:w-full minmd:3/4`}>
        <div className={`${styles.descDiv} ${reverse ? " fadeRightMini" : " fadeLeftMini"} ${reverse ? styles.textRight : styles.textLeft}`}>
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