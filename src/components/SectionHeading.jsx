const SectionHeading = ({heading, subHeading, headinAlign="text-center"}) => {
 

  return (
    <div className={headinAlign === "left" ? "text-left" : "text-center"}>
        <h4 className="text-[16px] font-poppins text-paragraph font-semibold uppercase">{subHeading}</h4>
        <h2 className="text-[50px] font-bold font-Volkhob">{heading}</h2>
    </div>
  )
}

export default SectionHeading