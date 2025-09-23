import { motion } from "framer-motion"
import { service_icon_1, service_icon_2, service_icon_3, service_icon_4 } from "../constant/constant"
import ServiceCard from "../components/ServiceCard"
import SectionHeading from "../components/SectionHeading"

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
        description: "Barton vanity itself do in it. Preferd to men it engrossed listening."
    },
    {
        id: 4,
        icon: service_icon_4,
        title: "Customization",
        description: "We deliver outsourced aviation services for military customers."
    }
]

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2, // delay between each child
        }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
}

const ServiceSection = () => {
    return (
        <section className="mt-[105px]">
            <div className="container relative">
                <img className="absolute left-[100%]" src="dotted.svg" alt="dot image" />

                {/* Heading with fade-in */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <SectionHeading heading={"We Offer Best Services"} subHeading={"CATEGORY"} />
                </motion.div>

                {/* Cards with stagger animation */}
                <motion.div
                    className="grid justify-between grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {servicesData?.map(service => (
                        <motion.div key={service.id} variants={cardVariants}>
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default ServiceSection
