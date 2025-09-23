import { motion } from "framer-motion"
import { step_icon_1, step_icon_2, step_icon_3 } from "../constant/constant"
import SectionHeading from "../components/SectionHeading"

const steps = [
    {
        id: 1,
        title: "Choose Destination",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        icon: step_icon_1,
        
    },
    {
        id: 2,
        title: "Make Payment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        icon: step_icon_2,
       
    },
    {
        id: 3,
        title: "Reach Airport on Selected Date",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        icon: step_icon_3,
       
    },
]

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.25 }
    }
}

const stepVariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

const Booking = () => {

    return (
        <section className="mt-[186px]">
            <div className="container">
                <div className="booking_container grid grid-cols-2 gap-2 justify-between items-center">
                    
                    {/* Left Text */}
                    <motion.div
                        className="booking_text"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <SectionHeading
                            heading={"Book Your Next Trip in 3 Easy Steps"}
                            subHeading={"Easy and Fast"}
                            headinAlign={"left"}
                        />

                        <motion.div
                            className="booking_steps space-y-10 mt-8"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {steps.map(step => (
                                <motion.div key={step.id} variants={stepVariants}>
                                    <StepDesign step={step} />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        className="booking_image"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.img
                            src="booking.svg"
                            alt="booking image"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const StepDesign = ({ step }) => {
    const bgStyle = () => {
        if (step.id === 1) {
            return "bg-yellow"
        }
        if (step.id === 2) {
            return "bg-orange"
        }
        if (step.id === 3) {
            return "bg-[#006380]"
        }
    }
    return (
        <div className="step flex items-center gap-6">
            <div
                className={`step_number flex items-center p-[13px] justify-center w-[47px] h-[47px] rounded-[13px] ${bgStyle()} text-white text-[30px] font-bold`}
            >
                <img src={step.icon} alt="icon" />
            </div>
            <div className="step_text">
                <h4 className="text-base text-paragraph font-bold mb-[5px] font-poppins">
                    {step.title}
                </h4>
                <p className="text-paragraph text-base font-poppins">{step.description}</p>
            </div>
        </div>
    )
}

export default Booking
