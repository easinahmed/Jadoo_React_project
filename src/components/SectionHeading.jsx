const SectionHeading = ({heading, subHeading}) => {
  return (
    <div className="text-center ">
        <h4 className="text-[16px] font-poppins font-semibold uppercase">{subHeading}</h4>
        <h2 className="text-[50px] font-bold font-volkhov">{heading}</h2>
    </div>
  )
}

export default SectionHeading