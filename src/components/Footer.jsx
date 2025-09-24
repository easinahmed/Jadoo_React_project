import { motion } from "framer-motion"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-[96px]">
      <div className="container">
        {/* Footer Content */}
        <motion.div
          className="footer_container footer sm:footer-horizontal text-base-content p-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <aside>
            <h3 className="text-[44px] font-medium">Jadoo.</h3>
            <p className="text-paragraph mt-[19px] max-w-[270px]">
              Book your trip in minute, get full Control for much longer.
            </p>
          </aside>

          {/* Navigation */}
          <nav>
            <h6 className="text-[21px] font-bold text-black mb-[34px]">Company</h6>
            <a className="link link-hover text-paragraph">About</a>
            <a className="link link-hover text-paragraph">Career</a>
            <a className="link link-hover text-paragraph">Mobile</a>
          </nav>

          <nav>
            <h6 className="text-[21px] font-bold text-black mb-[34px]">Contact</h6>
            <a className="link link-hover text-paragraph">Help/FAQ</a>
            <a className="link link-hover text-paragraph">Press</a>
            <a className="link link-hover text-paragraph">Affiliates</a>
          </nav>

          <nav>
            <h6 className="text-[21px] font-bold text-black mb-[34px]">More</h6>
            <a className="link link-hover text-paragraph">AirlineFees</a>
            <a className="link link-hover text-paragraph">Airline</a>
            <a className="link link-hover text-paragraph">Low Fare Tips</a>
          </nav>

          {/* Social & App */}
          <div>
            <div className="flex gap-[25px]">
              {["fb.svg", "insta.svg", "twit.svg"].map((icon, idx) => (
                <motion.div
                  key={idx}
                  className="cursor-pointer rounded-full w-[41px] h-[41px]  footer-icon-bg shadow-3 flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src={icon}  alt="social icon" />
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="text-[20px] font-medium text-paragraph mt-[26px]">
                Discover Our New App
              </h4>
              <div className="flex gap-4 mt-4">
                {["Play Store.png", "Google Play.png"].map((app, idx) => (
                  <motion.img
                    key={idx}
                    className="cursor-pointer"
                    src={app}
                    alt="app store"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <p className="font-poppins text-[14px] text-paragraph mt-[44px] mb-[80px] text-center">
          All rights {year} reserved@jadoo.co
        </p>
      </div>
    </footer>
  )
}

export default Footer
