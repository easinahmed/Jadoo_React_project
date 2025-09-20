

const DestinationCard = ({ destination }) => {
    return (
        <div className="destination_card">
            {/* Card 1 */}
            <div className="destination_card cursor-pointer h-[457px] hover:scale-110 overflow-hidden shadow-destinationCard transition-all ease-linear duration-200 rounded-[36px] flex flex-col">
                <div className="destination_image h-[320px] overflow-hidden mb-7">
                    <img className="w-full h-full object-cover" src={destination.image} alt={destination.name} />
                </div>
                <div className="destination_text px-5 pb-7 flex-1">
                    <div className="flex items-start justify-between mb-3">
                        <h4 className="text-[20px] text-heading font-semibold font-opensans">{destination.name}</h4>
                        <p className="text-paragraph text-base font-poppins">{destination.price}</p>
                    </div>
                    <div className="flex gap-2">
                        <img src="navigation.svg" alt="Trip" />
                        <p className="text-paragraph text-start text-base font-poppins">{destination.trip}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationCard