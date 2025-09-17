

const Testimonial = () => {
  return (
    
    <section className="mt-[200px]">
        <div className="container">
            <div className="testimonial_container">
                <h3 className="text-[18px] font-semibold font-poppins text-paragraph">TESTIMONIAL</h3>
                <div className="grid grid-cols-2 gap-[87px]">
                    <div className="text text-left">
                   <h1 className="text-[50px] font-bold font-Volkhob mt-2 max-w-[409px] mb-[80px]">What People Say About Us</h1>
                   <div className="dot">
                    <img src="dot.svg" alt="dot" />
                   </div>


                    </div>
                    <div className="image relative  max-w-[504px]">
                        <div className="py-[36px] px-[38px] rounded-[10px] relative bg-white z-[1]  shadow-testimonialCard ">
                            <div className="avatar rounded-full w-[68px] h-[68px] absolute -top-[32px] overflow-hidden -left-[32px]">
                                <img src="avatar.svg" className="w-full h-full" alt="avatar" />
                            </div>
                            <p className="text-base text-paragraph mb-[34px] font-poppins font-medium">“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                            <h3 className="text-[18px] font-bold font-poppins text-paragraph">Mike Tailor</h3>
                            <h4 className="text-[14px] font-medium font-poppins text-paragraph">Lahore, Pakistan</h4>
                        </div>

                        <div className="w-[502px] top-[90px] -z-[0] left-[50px] absolute pt-[156px] pb-[22px] px-[38px] rounded-[10px]  outline-[2px] outline-[#F7F7F7] ">
                            <h3 className="text-[18px] font-poppins font-semibold text-paragraph">Chris Thomas</h3>
                            <h4 className="text-[14px] font-poppins font-medium text-paragraph">New York, USA</h4>
                        </div>


                        <div className="arrow absolute top-[38%] -right-[28%]  flex flex-col gap-14">
                            <img src="arrow-up.svg"  className="cursor-pointer hover:saturate-200" alt="arrow" />
                            <img src="arrow-down.svg" className="cursor-pointer" alt="arrow" />
                        </div>
                    </div>

                </div>

                
            </div>
        </div>
    </section>
  )
}

export default Testimonial