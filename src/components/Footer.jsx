

const Footer = () => {
  return (
    <>
      <footer className="mt-[96px]">
        <div className="container">

          <div className="footer_container footer sm:footer-horizontal  text-base-content p-10 ">
            <aside>
              <h3 className="text-[44px] font-medium">Jadoo.</h3>
              <p className="text-paragraph mt-[19px] max-w-[270px]">
                Book your trip in minute, get full
                Control for much longer.

              </p>
            </aside>
            <nav>
              <h6 className="text-[21px] font-bold text-black mb-[34px] ">Company</h6>
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

            <div>
              <div className="flex gap-[25px]">
                <div className=" cursor-pointer rounded-full w-[41px] h-[41px] shadow-3 flex items-center justify-center "> <img src="fb.svg" alt="icon" /></div>
                <div className=" cursor-pointer rounded-full w-[41px] h-[41px] shadow-3 flex items-center justify-center 
                [background:conic-gradient(from_180deg_at_50%_50%,#8B02F1_0%,#F29BA4_17%,#C68BF0_29%,#D164DA_43%,#C963E8_61%,#BFC2E8_72%,#FFC99D_80%,#DD8B9C_88%,#BAD0F1_93%,#CED8C6_100%,#FFFFFF_100%)] "> <img src="insta.svg" alt="icon" /></div>
                <div className=" cursor-pointer rounded-full w-[41px] h-[41px] shadow-3 flex items-center justify-center"> <img src="twit.svg" alt="icon" /> </div>

              </div>
              <div >
                <h4 className="text-[20px] font-medium text-paragraph mt-[26px]"> Discover Our New App</h4>
                <div className="flex gap-4 mt-4">
                  <img className="cursor-pointer" src="Play Store.png" alt="icon" />
                  <img className="cursor-pointer" src="Google Play.png" alt="icon" />
                </div>

              </div>

            </div>



          </div>
            <p className="font-poppins text-[14px] text-paragraph mt-[44px] mb-[80px] text-center">All rights reserved@jadoo.co</p>
        </div>
      </footer>
    </>
  )
}

export default Footer