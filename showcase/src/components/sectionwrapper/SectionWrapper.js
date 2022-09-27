
const SectionWrapper = ({ title, description, showBtn, mockupImg }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={mockupImg} alt='mockup' />
    </div>
  )
}

export default SectionWrapper