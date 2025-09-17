const Destination = () => {
    return (
        <section>
            <div className="container">
                <div className="destination_container relative text-center mt-[123px]">
                    <img className="absolute left-[90%] top-[50%] -translate-y-[20%] -z-[0]" src="Decore-destination.svg" alt="" />
                    <h3 className="font-poppins text-[18px] font-semibold">Top Selling</h3>
                    <h1 className="font-Volkhob font-bold text-[50px] mb-[60px]">Top Destinations</h1>
                    
                    {/* Fixed Grid */}
                    <div className="grid grid-cols-[315px_315px_315px]  justify-between gap-9">

                        {/* Card 1 */}
                        <div className="destination_card cursor-pointer h-[457px] hover:scale-110 overflow-hidden shadow-destinationCard transition-all ease-linear duration-200 rounded-[36px] flex flex-col">
                            <div className="destination_image h-[320px] overflow-hidden mb-7">
                                <img className="w-full h-full object-cover" src="rome.jpg" alt="Rome, Italy" />
                            </div>
                            <div className="destination_text px-5 pb-7 flex-1">
                                <div className="flex items-start justify-between mb-3">
                                    <h4 className="text-[20px] text-heading font-semibold font-opensans">Rome, Italy</h4>
                                    <p className="text-paragraph text-base font-poppins">$5,42k</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="navigation.svg" alt="Trip" />
                                    <p className="text-paragraph text-start text-base font-poppins">10 Days Trip</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="destination_card cursor-pointer h-[457px] hover:scale-110 overflow-hidden shadow-destinationCard transition-all ease-linear duration-200 rounded-[36px] flex flex-col">
                            <div className="destination_image h-[320px] overflow-hidden mb-7">
                                <img className="w-full h-full object-cover" src="london.jpg" alt="London, England" />
                            </div>
                            <div className="destination_text px-5 pb-7 flex-1">
                                <div className="flex items-start justify-between mb-3">
                                    <h4 className="text-[20px] text-heading font-semibold font-opensans">London, England</h4>
                                    <p className="text-paragraph text-base font-poppins">$12,42k</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="navigation.svg" alt="Trip" />
                                    <p className="text-paragraph text-start text-base font-poppins">12 Days Trip</p>
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="destination_card relative z-[1] cursor-pointer h-[457px] hover:scale-110 overflow-hidden shadow-destinationCard transition-all ease-linear duration-200 rounded-[36px] flex flex-col">
                            <div className="destination_image h-[320px] overflow-hidden mb-7">
                                <img className="w-full h-full object-cover" src="europe.jpg" alt="Full Europe" />
                            </div>
                            <div className="destination_text  bg-white px-5 pb-7 flex-1">
                                <div className="flex items-start justify-between mb-3">
                                    <h4 className="text-[20px] text-heading font-semibold font-opensans">Full Europe</h4>
                                    <p className="text-paragraph text-base font-poppins">$40k</p>
                                </div>
                                <div className="flex gap-2">
                                    <img src="navigation.svg" alt="Trip" />
                                    <p className="text-paragraph text-start text-base font-poppins">28 Days Trip</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Destination;
