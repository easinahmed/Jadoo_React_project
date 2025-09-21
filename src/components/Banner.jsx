import { motion } from "framer-motion"
import bg_shape from "../assets/hero-bg.png"
import traveller from "../assets/traveller.png"
import Button from "./Button"
import Play from "../assets/play.svg"

const bgStyle = {
    background: `url(${bg_shape})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right top"
}

const Banner = () => {
    return (
        <section className="" style={bgStyle} >
            <div className="blur-[150px] bg-blur w-[470px] h-[470px] rounded-full absolute -left-[25%] top-[20px]"></div>

            <div className="container ">
                <div className="banner_container pt-[217px]">
                    <div className="grid grid-cols-2 items-center gap-4">

                        {/* Text Part */}
                        <motion.div
                            className="banner_text"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <h2 className="font-semibold uppercase text-[20px] text-orange">
                                Best Destinations around the world
                            </h2>
                            <h1 className="font-bold text-[84px] text-heading pt-6 pb-7.5 leading-[1.05]">
                                Travel, <span className="relative after-decor z-[1]">enjoy</span> and live a new and full life
                            </h1>
                            <p className="text-base text-paragraph leading-[30px]">
                                Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
                            </p>

                            <div className="mt-9 space-x-[44px] flex items-center ">
                                <Button>Find out more</Button>
                                <Button TagName="a" btnStyle="secondary">
                                    <span className="flex items-center gap-[21px] text-paragraph">
                                        <span className="flex items-center justify-center w-[52px] h-[52px] rounded-full bg-orange shadow-2 cursor-pointer">
                                            <img src={Play} alt="Play" className="" />
                                        </span>
                                        Play Demo
                                    </span>
                                </Button>
                            </div>
                        </motion.div>

                        {/* Image Part */}
                        <motion.div
                            className="banner_image relative"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            {/* Traveller floating */}
                            <motion.img
                                src={traveller}
                                className="z-[1] relative"
                                alt="traveller"
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Plane 1 */}
                            <motion.img
                                className="absolute top-[10%]"
                                src="plane.svg"
                                alt="plane"
                                initial={{ x: -100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                viewport={{ once: true }}
                            />

                            {/* Plane 2 looping */}
                            <motion.img
                                className="absolute top-[15%] -right-[10%] -z-[0]"
                                src="plane.svg"
                                alt="plane"
                                animate={{ x: [0, -30, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
