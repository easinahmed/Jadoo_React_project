import Banner from "../components/Banner"
import Booking from "../sections/BookingSection"
import Company from "../components/Company"
import DestinationSection from "../sections/DestinationSection"
import ServiceSection from "../sections/ServiceSection"
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