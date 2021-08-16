import React from 'react'
import GithubIcon from '../assets/github'
import TwitterIcon from '../assets/twitter'

const Footer = () => {
    const footerStyle= `
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        bg-[#181818]
        pt-[40px]
        pb-[34px]
        text-[#FFFFFF]
        px-[32px]
        md:px-[60px]
        lg:px-[90px]
    `
    return (
        <section className={footerStyle}>
            <ul className="footer-nav flex items-center text-[14px] md:text-[15px] lg:text-[17px]">
                <li>Privacy</li>
                <li>Case Study</li>
                <li>Sponsor</li>
            </ul>

            <div className="flex items-center">
                <span className="mr-[27px]">
                    <a href="https://github.com/LuluNwenyi/iAffirm.life">
                        <GithubIcon dark/>
                    </a>
                </span>
                <span>
                    <a href="https://twitter.com/">
                        <TwitterIcon dark/>
                    </a>
                </span>
            </div>
        </section>
    )
}

export default Footer
