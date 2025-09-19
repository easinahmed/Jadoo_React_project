
const Button = ({TagName="button", btnStyle="default", children, ...props}) => {
    const buttonStyle = ()=> {
        if(btnStyle==="default") {
        return "bg-yellow text-white hover:bg-amber-500 btn py-[19px} px-[26px] text-[18px] font-medium shadow-1 h-[60px] rounded-[10px]"
        }
        if(btnStyle==="secondary") {
        return ""
        }
        if(btnStyle==="subscribe") {
        return "px-6 py-2 w-[180px] h-[68px] cursor-pointer text-white font-semibold font-opensans bg-gradient-to-r from-orange-400 to-orange-500 rounded-lg hover:from-orange-500 hover:to-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 ease-in-out"
        }
      
    }
  return (
    <TagName 
    className={buttonStyle()}
    >
      {children}
    </TagName>
  )
}

export default Button
