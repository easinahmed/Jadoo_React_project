import { motion } from "framer-motion"
import { company_1, company_2, company_3, company_4, company_5 } from "../constant/constant"

const Company = () => {
  const companies = [company_1, company_2, company_3, company_4, company_5]

  return (
    <div className="container mt-[140px] mb-[100px] items-center justify-between grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-10 gap-x-5">
      {companies.map((company, index) => (
        <CompanyBtn key={index} index={index}>
          {company}
        </CompanyBtn>
      ))}
    </div>
  )
}

const CompanyBtn = ({ children, index }) => {
  return (
    <motion.div
      className="w-[241px] flex items-center justify-center h-[86px] overflow-hidden px-[40px] rounded-[10px] hover:shadow-companyCard cursor-pointer grayscale-100 hover:grayscale-0 hover:scale-110 transition-all ease-linear duration-150"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <img src={children} alt="company" />
    </motion.div>
  )
}

export default Company
