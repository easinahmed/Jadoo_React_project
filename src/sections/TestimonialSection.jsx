import { useState } from "react"
import SectionHeading from "../components/SectionHeading"

const testimonials = [
  {
    id: 1,
    name: "Mike Taylor",
    role: "Lahore, Pakistan",
    img: "avatar.svg",
    text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
  },
  {
    id: 2,
    name: "Chris Thomas",
    role: "New York, USA",
    img: "avatar.svg",
    text: "Amazing service! Everything was smooth and professional. Highly recommend working with this team.",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "London, UK",
    img: "avatar.svg",
    text: "They exceeded all my expectations. The design and workflow were excellent, and the team was very supportive.",
  },
]

const Testimonial = () => {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="mt-[200px]">
      <div className="container">
        <div className="testimonial_container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[87px]">
            {/* Left Text */}
            <div className="text text-left max-w-[409px]">
              <SectionHeading
                heading={"What People Say About Us"}
                subHeading={"TESTIMONIAL"}
                headinAlign={"left"}
              />
              {/* Dots */}
              <div className="dot mt-[36px] flex gap-2">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      current === index ? "bg-[#2E3A59]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Testimonial */}
            <div className="image relative max-w-[504px]">
              {/* Front Card */}
              <div className="py-[36px] px-[38px] rounded-[10px] relative bg-white z-[1] shadow-testimonialCard">
                <div className="avatar rounded-full w-[68px] h-[68px] absolute -top-[32px] overflow-hidden -left-[32px]">
                  <img
                    src={testimonials[current].img}
                    className="w-full h-full"
                    alt="avatar"
                  />
                </div>
                <p className="text-base text-paragraph mb-[34px] font-poppins font-medium">
                  “{testimonials[current].text}”
                </p>
                <h3 className="text-[18px] font-bold font-poppins text-paragraph">
                  {testimonials[current].name}
                </h3>
                <h4 className="text-[14px] font-medium font-poppins text-paragraph">
                  {testimonials[current].role}
                </h4>
              </div>

              {/* Back Layer */}
              <div className="w-[502px] top-[90px] -z-[0] left-[50px] absolute pt-[156px] pb-[22px] px-[38px] rounded-[10px] outline outline-1 outline-[#F7F7F7] bg-white">
                <h3 className="text-[18px] font-poppins font-semibold text-paragraph">
                  {testimonials[(current + 1) % testimonials.length].name}
                </h3>
                <h4 className="text-[14px] font-poppins font-medium text-paragraph">
                  {testimonials[(current + 1) % testimonials.length].role}
                </h4>
              </div>

              {/* Arrow Navigation */}
              <div className="arrow absolute top-[38%] -right-[28%] flex flex-col gap-14">
                <img
                  src="arrow-up.svg"
                  className="cursor-pointer hover:saturate-200"
                  alt="arrow-up"
                  onClick={prevSlide}
                />
                <img
                  src="arrow-down.svg"
                  className="cursor-pointer hover:saturate-200"
                  alt="arrow-down"
                  onClick={nextSlide}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
