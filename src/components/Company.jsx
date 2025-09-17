

const Company = () => {
  return (
    <div className="container mt-[140px] mb-[100px] items-center justify-between  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-5">
      <CompanyBtn>company-1.svg</CompanyBtn>
      <CompanyBtn>company-2.svg</CompanyBtn>
      <CompanyBtn>company-3.svg</CompanyBtn>
      <CompanyBtn>company-4.svg</CompanyBtn>
      <CompanyBtn>company-5.svg</CompanyBtn>
    </div>
  )
}

const CompanyBtn = ({children}) => {
    return (
        <div className="w-[241px] flex items-center justify-center h-[86px] overflow-hidden px-[40px] rounded-[10px] hover:shadow-companyCard cursor-pointer grayscale-100 hover:grayscale-0 hover:scale-110 transition-all ease-linear duration-150">
            <img src={children}  alt="company" />
        </div>
    )
}

export default Company