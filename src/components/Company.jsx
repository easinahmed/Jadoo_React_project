import { company_1, company_2, company_3, company_4, company_5 } from "../constant/constant"


const Company = () => {
  return (
    <div className="container mt-[140px] mb-[100px] items-center justify-between  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-5">
      <CompanyBtn>{company_1}</CompanyBtn>
      <CompanyBtn>{company_2}</CompanyBtn>
      <CompanyBtn>{company_3}</CompanyBtn>
      <CompanyBtn>{company_4}</CompanyBtn>
      <CompanyBtn>{company_5}</CompanyBtn>
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