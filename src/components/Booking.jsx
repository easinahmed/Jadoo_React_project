

const Booking = () => {
  return (
    <section className="mt-[186px]">
        <div className="container">
            <div className="booking_container grid grid-cols-2 gap-2 justify-between items-center">
                <div className="booking_text">
                    <h3 className="text-[18px] font-poppins font-semibold mb-[15px] text-paragraph">Easy and Fast</h3>
                    <h1 className="text-[50px] font-bold font-Volkhob text-[#14183E]  mb-[31px]">Book Your Next Trip in 3 Easy Steps</h1>
                    <div className="booking_steps space-y-10">
                        <div className="step flex items-center gap-6">
                            <div className="step_number flex items-center p-[13px] justify-center w-[47px] h-[47px] rounded-[13px] bg-yellow text-white text-[30px] ">
                                <img src="selection-1.svg" alt="icon" />
                            </div>
                            <div className="step_text">
                                <h4 className="text-[16px] text-paragraph font-bold mb-[5px] font-poppins">Choose Destination</h4>
                                <p className="text-paragraph text-base font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                            </div>
                        </div>

                        <div className="step flex items-center gap-6">
                            <div className="step_number flex items-center p-[13px] justify-center w-[47px] h-[47px] rounded-[13px] bg-[#F15A2B] text-white text-[30px] font-bold">
                                <img src="selection-2.svg" alt="icon" />
                            </div>
                            <div className="step_text">
                                <h4 className="text-[16px] text-paragraph font-bold mb-[5px] font-poppins">Make Payment</h4>
                                <p className="text-paragraph text-base font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                            </div>
                        </div>

                        <div className="step flex items-center gap-6">
                            <div className="step_number flex items-center p-[13px] justify-center w-[47px] h-[47px] rounded-[13px] bg-[#006380] text-white text-[30px] font-bold">
                                <img src="selection-3.svg" alt="icon" />
                            </div>
                            <div className="step_text">
                                <h4 className="text-[16px] text-paragraph font-bold mb-[5px] font-poppins">Reach Airport on Selected Date</h4>
                                <p className="text-paragraph text-base font-poppins">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="booking_image">
                    <img src="booking.svg" alt="booking image" />
                </div>

            </div>
        </div>
    </section>
  )
}

export default Booking