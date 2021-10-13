import React from "react"
import { Link } from "gatsby"
import GithubIcon from "../assets/github"
import TwitterIcon from "../assets/twitter"
import MobileCoffee from "../assets/mobile-coffee"
import Coffee from "../assets/coffee"


export const LeftNav = ({navStyle, ulStyle}) => {
    return(
        <nav className={navStyle}>
        <ul className={ulStyle}>
          <li><Link to="/sponsor">💖 Sponsor</Link></li>
          <li>
            <a href="https://github.com/LuluNwenyi/iAffirm.life" className="flex">
                <GithubIcon/>Github
            </a>
          </li>
          {/* <li><Link to="/docs">📃 Docs</Link></li> */}
        </ul>
      </nav>
    )
}

export const RightNav = ({iconBoxStyle}) => {
  
  return(
      <>
      <span className={`${iconBoxStyle} mr-[36px]`}>
      <a href="https://twitter.com/iAffirmBot"><TwitterIcon/></a> 
    </span>
    <span className={iconBoxStyle}>
      <a href="https://buymeacoffee.com/lulunwenyi"><Coffee/> <MobileCoffee/></a> 
    </span>
      </>
  )
}

