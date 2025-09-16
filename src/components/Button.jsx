
const Button = ({TagName="button", btnStyle="default", children, ...props}) => {
    const buttonStyle = ()=> {
        if(btnStyle==="default") {
        return "bg-yellow text-white hover:bg-amber-500 btn py-[19px} px-[26px] text-[18px] font-medium shadow-1 h-[60px] rounded-[10px]"
        }
        if(btnStyle==="secondary") {
        return ""
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
