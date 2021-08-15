import * as React from "react"
import { Link } from "gatsby"
import Logo from "../assets/logo"
import GithubIcon from "../assets/github"
import TwitterIcon from "../assets/twitter"
import Coffee from "../assets/coffee"

const headerStyle = `
  flex
  items-center
  justify-between
  py-[21px]
  px-[90px]
  border-b-[1px]
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
flex
items-center
justify-center
`

const Header = () => (
  <header className={headerStyle}>
    <div className={navStyle}>
      <Link to="/" className="pr-[126px]">     
      <Logo/>
      </Link>
      <nav className="nav">
        <ul className="flex">
          <Link to="/sponsor">💖 Sponsor</Link>
          <li>
            <a href="https://github.com/LuluNwenyi/iAffirm.life" className="flex">
                <GithubIcon/>Github
            </a>
          </li>
          <Link to="/docs">📃 Docs</Link>
        </ul>
      </nav>
    </div>

    <ul className="flex">
      <span className={`${iconBoxStyle} mr-[36px]`}>
        <a href="https://twitter.com/"><TwitterIcon/></a> 
      </span>
      <span className={iconBoxStyle}>
        <a href=""><Coffee/></a> 
      </span>
    </ul>
  </header>
)


export default Header
