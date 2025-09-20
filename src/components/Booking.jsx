import { step_icon_1, step_icon_2, step_icon_3 } from "../constant/constant"
import SectionHeading from "./SectionHeading"


const Booking = () => {

const steps = [
    {
        id: 1,
        title: "Choose Destination",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        icon: step_icon_1,
        bgColor: "bg-yellow"
    },
    {
        id: 2,
        title: "Make Payment",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        icon: step_icon_2,
        bgColor: "bg-[#F15A2B]"
    },
    {
        id: 3,
        title: "Reach Airport on Selected Date",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
        icon: step_icon_3,
        bgColor: "bg-[#006380]"
    },
    
]

  return (
    <section className="mt-[186px]">
        <div className="container">
            <div className="booking_container grid grid-cols-2 gap-2 justify-between items-center">
                <div className="booking_text">
                   <SectionHeading heading={"Book Your Next Trip in 3 Easy Steps"} subHeading={"Easy and Fast"} headinAlign={"left"}  />
                    <div className="booking_steps space-y-10 mt-8">
                        {steps.map(step => (
                            <StepDesign step={step} key={step.id} />
                        ))}
                    </div>
                </div>

                <div className="booking_image">
                    <img src="booking.svg" alt="booking image" />
                </div>

            </div>
        </div>
    </section>
  )
}

const StepDesign = ({step}) => {
    return (
        <div className="step flex items-center gap-6">
            <div className={`step_number flex items-center p-[13px] justify-center w-[47px] h-[47px] rounded-[13px] ${step.bgColor} text-white text-[30px] font-bold`}>
                <img src={step.icon} alt="icon" />
            </div>
            <div className="step_text">
                <h4 className="text-[16px] text-paragraph font-bold mb-[5px] font-poppins">{step.title}</h4>
                <p className="text-paragraph text-base font-poppins">{step.description}</p>
            </div>
        </div>
    )
}


export default Booking