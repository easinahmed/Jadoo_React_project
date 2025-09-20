import Banner from "../components/Banner"
import Booking from "../components/Booking"
import Company from "../components/Company"
import DestinationSection from "../components/DestinationSection"
import ServiceSection from "../components/ServiceSection"
import Subscribe from "../components/Subscribe"
import Testimonial from "../components/Testimonial"


const Home = () => {
  return (
    <>
    <Banner />
    <ServiceSection />
    <DestinationSection />
    <Booking/>
    <Testimonial />
    <Company/>
    <Subscribe />
    </>
  )
}

export default Home