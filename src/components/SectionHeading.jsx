const SectionHeading = ({heading, subHeading, headinAlign="default"}) => {
  const headingStyle = () => {
    if(headinAlign==="default"){
      return "text-center"
    }
    if(headinAlign==="left"){
      return "text-left"
    }
    if(headinAlign==="right"){
      return "text-right"
    }
  }

  return (
    <div className={headingStyle()}>
        <h4 className="text-[16px] font-poppins text-paragraph font-semibold uppercase">{subHeading}</h4>
        <h2 className="text-[50px] font-bold font-Volkhob">{heading}</h2>
    </div>
  )
}

export default SectionHeading