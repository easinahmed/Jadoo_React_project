

const ServiceCard = ({ service }) => {
    return (
        <section className="service mt-[105px] text-center">
            <div className="container">
                <div className="service_container">
                    


                    <div className=" relative  cursor-pointer z-[1] after:absolute after:-bottom-[20%] hover:after:transition-all after:content-[''] after:w-[100px] after:h-[100px] after:left-[-50px]  after:bg-transparent after:-z-[1] after:rounded-tl-[30px] after:rounded-br-[10px] hover:after:bg-orange">

                        <div className="hover:bg-white hover:scale-110 relative transition-all z-[1] bg-transparent p-[40px] rounded-[33px] hover:shadow-serviceCard ">
                            <div className="mx-auto w-[90px] h-[90px] flex items-center justify-center">
                                <img className="h-full w-full" src={service.icon} alt="icon" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-semibold text-heading font-opensans leading-1 pt-7.5 pb-4">{service.title}</h3>
                                <p className="font-medium text-[15px] text-paragraph  font-poppins ">{service.description}</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}


export default ServiceCard



