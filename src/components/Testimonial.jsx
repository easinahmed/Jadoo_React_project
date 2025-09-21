import { motion } from "framer-motion"
import SectionHeading from "./SectionHeading"

const Testimonial = () => {
  return (
    <section className="mt-[200px]">
      <div className="container">
        <div className="testimonial_container">
          <div className="grid grid-cols-2 gap-[87px]">
            {/* Left Text */}
            <div className="text text-left max-w-[409px]">
              <SectionHeading
                heading={"What People Say About Us"}
                subHeading={"TESTIMONIAL"}
                headinAlign={"left"}
              />
              <div className="dot mt-[36px]">
                <img src="dot.svg" alt="dot" />
              </div>
            </div>

            {/* Right Testimonial with animation */}
            <motion.div
              className="image relative max-w-[504px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="py-[36px] px-[38px] rounded-[10px] relative bg-white z-[1] shadow-testimonialCard"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="avatar rounded-full w-[68px] h-[68px] absolute -top-[32px] overflow-hidden -left-[32px]">
                  <img
                    src="avatar.svg"
                    className="w-full h-full"
                    alt="avatar"
                  />
                </div>
                <p className="text-base text-paragraph mb-[34px] font-poppins font-medium">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </p>
                <h3 className="text-[18px] font-bold font-poppins text-paragraph">
                  Mike Tailor
                </h3>
                <h4 className="text-[14px] font-medium font-poppins text-paragraph">
                  Lahore, Pakistan
                </h4>
              </motion.div>

              <motion.div
                className="w-[502px] top-[90px] -z-[0] left-[50px] absolute pt-[156px] pb-[22px] px-[38px] rounded-[10px] outline-[2px] outline-[#F7F7F7]"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h3 className="text-[18px] font-poppins font-semibold text-paragraph">
                  Chris Thomas
                </h3>
                <h4 className="text-[14px] font-poppins font-medium text-paragraph">
                  New York, USA
                </h4>
              </motion.div>

              {/* Arrow Navigation */}
              <motion.div
                className="arrow absolute top-[38%] -right-[28%] flex flex-col gap-14"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src="arrow-up.svg"
                  className="cursor-pointer hover:saturate-200"
                  alt="arrow"
                />
                <img
                  src="arrow-down.svg"
                  className="cursor-pointer"
                  alt="arrow"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
