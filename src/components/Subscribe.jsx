import { motion } from "framer-motion"
import decorDown from "../assets/decor-subscribe.svg"
import Button from "./Button"

const Subscribe = () => {
    return (
        <section className="mt-[124px]">
            <motion.div
                className="container bg-[rgba(223,215,249,0.2)] py-[80px] relative px-[145px] rounded-[129px_20px_20px_20px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                {/* Top Icon */}
                <motion.div
                    className="w-[70px] h-[70px] rounded-full flex items-center justify-center absolute -top-[35px] -right-[35px] custom-gradient-bg"
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <img src="send.svg" alt="icon" />
                </motion.div>

                {/* Heading */}
                <motion.h1
                    className="text-center text-[33px] font-semibold text-paragraph font-poppins mb-[74px] leading-[54px] max-w-[881px] mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Subscribe to get information, latest news and other interesting offers about Jadoo
                </motion.h1>

                {/* Email Subscription */}
                <EmailSubscription />

                <div className="dot-2 absolute -right-[7%] -bottom-[15%]">
                    <img src="dotted-2.svg" alt="dotted" />
                </div>

                <img
                    className="absolute bottom-0 opacity-20 left-[15px]"
                    src={decorDown}
                    alt="decor"
                />
            </motion.div>
        </section>
    )
}

const EmailSubscription = () => {
    return (
        <motion.div
            className="flex relative z-[1] items-center space-x-4 p-2 rounded-lg overflow-hidden max-w-lg mx-auto my-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
        >
            {/* Email Input Field */}
            <div className="relative bg-white w-[421px] rounded-lg h-[68px] items-center flex-grow">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {/* Email Icon */}
                    <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                    </svg>
                </div>
                <input
                    type="email"
                    id="email-address"
                    name="email-address"
                    className="block w-full h-full pl-10 pr-4 py-2 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Your email"
                />
            </div>

            {/* Subscribe Button */}
            <Button btnStyle="subscribe">Subscribe</Button>
        </motion.div>
    )
}

export default Subscribe
