import { motion } from "framer-motion"
import { destination_1, destination_2, destination_3 } from "../constant/constant"
import SectionHeading from "./SectionHeading"
import DestinationCard from "./DestinationCard"

const destinationData = [
    {
        id: 1,
        image: destination_1,
        name: "Rome, Italy",
        price: "$5,42k",
        trip: "10 Days Trip"
    },
    {
        id: 2,
        image: destination_2,
        name: "London, England",
        price: "$12,42k",
        trip: "12 Days Trip"
    },
    {
        id: 3,
        image: destination_3,
        name: "Full Europe",
        price: "$40k",
        trip: "28 Days Trip"
    }
]

// Variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.25 }
    }
}

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const DestinationSection = () => {
    return (
        <section className="mt-[123px] text-center">
            <div className="container relative z-[1]">
                <img
                    className="absolute left-[96%] top-[48%] -translate-y-[20%] -z-[1]"
                    src="Decore-destination.svg"
                    alt="decoration"
                />

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <SectionHeading heading={"Top Selling Destinations"} subHeading={"Top Selling"} />
                </motion.div>

                {/* Destination Cards */}
                <motion.div
                    className="grid grid-cols-3 justify-between gap-15 mt-[60px]"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {destinationData?.map(destination => (
                        <motion.div
                            key={destination.id}
                            variants={cardVariants}
                            whileHover={{ scale: 1.05, boxShadow: "0px 12px 30px rgba(0,0,0,0.15)" }}
                            transition={{ type: "spring", stiffness: 200, damping: 15 }}
                            className="rounded-2xl"
                        >
                            <DestinationCard destination={destination} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default DestinationSection
