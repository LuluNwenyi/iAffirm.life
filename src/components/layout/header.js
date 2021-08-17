import React,{useState} from "react"
import { Link } from "gatsby"
import Logo from "../assets/logo"
import Menu from "../assets/menu"
import {RightNav, LeftNav} from "./nav"


const Header = () => {
  const [showMenu,setShowMenu] = useState(false)

    const headerStyle = `
    flex
    items-center
    justify-between
    py-[21px]
    px-[32px]
    md:px-[60px]
    lg:px-[90px]
    border-b-[1px]
    absolute
    w-full
    z-[100]
    bg-white
  `
  const navStyle= `
    flex
    items-center
  `
  const iconBoxStyle = `
      w-[48px]
      h-[48px]
      bg-[#F7F7F7]
      rounded-[4px]
      items-center
      justify-center
  `

  return(
  <>
  <header className={headerStyle}>
    <div className={navStyle}>
      <Link to="/" className="lg:pr-[126px] pr-[60px]">     
      <Logo/>
      </Link>
      <LeftNav 
        navStyle="nav hidden md:block"
        ulStyle="flex"
      />
    </div>  

    <ul className="flex">
      <span className="block md:hidden cursor-pointer md" onClick={() => setShowMenu(!showMenu)} >
        <Menu/>
      </span>

      <RightNav iconBoxStyle={`${iconBoxStyle} md:flex hidden`} />
    </ul>
  </header>

  {/* mobile navigation */}
      <div className={`px-[32px] block md:hidden border-t-[2px] border-page-blue shadow-md w-[80%] absolute bg-white z-[20] left-[10vw] transition-[top] duration-500 ease-in ${!showMenu ? "-top-72" : "top-[60px]"}`}>
       <LeftNav navStyle="mobile-nav"/>
       <div className="flex items-center py-[37px]">
         <RightNav iconBoxStyle={`${iconBoxStyle} md:hidden flex`}/>
       </div>
      </div>
  </>
  )
}


export default Header
