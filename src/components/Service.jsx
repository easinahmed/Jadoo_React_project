

const Service = () => {
    return (
        <section className="service mt-[105px] text-center">
            <div className="container">
                <div className="service_container relative">
                    <img className="absolute left-[100%]" src="dotted.svg" alt="dot image" />
                    <h3 className="text-[18px] text-paragraph">CATEGORY</h3>
                    <h1 className="text-[50px] font-bold font-Volkhob mt-2.5 mb-[66px]">We Offer Best Services</h1>
                    <div className="flex justify-between">

                        <div className="service_card cursor-pointer  hover:shadow-serviceCard transition-all ease-linear duration-150 rounded-[36px] hover:scale-110  p-[40px] flex flex-col items-center">
                            <div className="service_image mb-7">
                                <img src="Weather.svg" alt="image" />
                            </div>
                            <h4 className="text-[20px] text-heading font-semibold mb-[15px] font-opensans">Calculated Weather</h4>
                            <p className="text-paragraph text-base font-poppins">Built Wicket longer admire do barton vanity itself do in it.</p>
                        </div>


                        <div className="service_card flex cursor-pointer flex-col hover:shadow-serviceCard transition-all ease-linear duration-150 hover:scale-110  rounded-[36px] items-center p-[40px] relative">
                            <div className="service_image mb-7 absolute top-[5px]">
                                <img src="Flight.png" alt="image" />
                            </div>
                            <h4 className="text-[20px] text-heading font-semibold mb-[15px] font-opensans mt-[106px]">Best Flight</h4>
                            <p className="text-paragraph text-base font-poppins">Engrossed listening. Park gate sell they west hard for the.</p>
                        </div>


                        <div className="service_card flex cursor-pointer hover:shadow-serviceCard transition-all ease-linear duration-150 flex-col hover:scale-110  rounded-[36px] p-[40px] items-center">
                            <div className="service_image mb-7">
                                <img src="Events.svg" alt="image" />
                            </div>
                            <h4 className="text-[20px] text-heading font-semibold mb-[15px] font-opensans">Local Events</h4>
                            <p className="text-paragraph text-base font-poppins">Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                        </div>


                        <div className="service_card relative after-shape flex    cursor-pointer hover:shadow-serviceCard transition-all ease-linear duration-150 hover:scale-110  rounded-[36px] flex-col p-[40px] items-center">
                            <div className="service_image mb-7">
                                <img src="Customization.svg" alt="image" />
                            </div>
                            <h4 className="text-[20px] text-heading font-semibold mb-[15px] font-opensans">Customization</h4>
                            <p className="text-paragraph text-base font-poppins">We deliver outsourced aviation services for military customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service



