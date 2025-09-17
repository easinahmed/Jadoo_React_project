import { service_icon_1, service_icon_2, service_icon_3, service_icon_4 } from "../constant/constant"
import ServiceCard from "./ServiceCard"
import SectionHeading from "./SectionHeading"
 
const servicesData = [
    {
        id: 1,
        icon: service_icon_1,
        title: "Calculate Weather",
        description: "Built Wicket longer admire do barton vanity itself do in it."
    },
    {
        id: 2,
        icon: service_icon_2,
        title: "Book Flights",
        description: "Engrossed listening. Park gate sell they west hard for the."
    },
    {
        id: 3,
        icon: service_icon_3,
        title: "Find Events",
        description: "Barton vanity itself do in it. Preferd to men it engrossed listening. "
    },
    {
        id: 4,
        icon: service_icon_4,
        title: "Customization",
        description: "We deliver outsourced aviation services for military customers."
    }
]

const ServiceSection = () => {
  return (
    <section className="mt-[105px] ">
        <div className="container relative">
            <img className="absolute left-[100%]" src="dotted.svg" alt="dot image" />
            <SectionHeading heading={"We Offer Best Services"} subHeading={"CATEGORy"} />
            <div  className="grid justify-between grid-cols-4">
                {servicesData?.map( service => <ServiceCard key={service.id} service={service} />)}
            </div>
        </div>
    </section>
  )
}


export default ServiceSection