import { destination_1, destination_2, destination_3 } from "../constant/constant"
import SectionHeading from "./SectionHeading"
import DestinationCard from "./DestinationCard"


const destinationData = [
    {
        id : 1,
        image : destination_1,
        name : "Rome, Italy",
        price : "$5,42k",
        trip : "10 Days Trip"
    },
    {
        id : 2,
        image : destination_2,
        name : "London, England",
        price : "$12,42k",
        trip : "12 Days Trip"
    },
    {
        id : 3,
        image : destination_3,
        name : "Full Europe",
        price : "$40k",
        trip : "28 Days Trip"
    }
]

const DestinationSection = () => {
  return (
    <section className="mt-[123px] text-center">
        <div className="container relative z-[1]">
            <img className="absolute left-[96%] top-[48%] -translate-y-[20%] -z-[1]" src="Decore-destination.svg" alt="" />
            <SectionHeading heading={"Top Selling Destinations"} subHeading={"Top Selling"} />
            <div className="grid grid-cols-3 justify-between gap-15 mt-[60px]">
                {destinationData?.map( destination => <DestinationCard key={destination.id} destination={destination} />)}
            </div>
        </div>

    </section>
  )
}

export default DestinationSection