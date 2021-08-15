import React from 'react'
import GithubIcon from '../assets/github'
import TwitterIcon from '../assets/twitter'

const Footer = () => {
    const footerStyle= `
        flex
        items-center
        justify-between
        bg-[#181818]
        pt-[40px]
        pb-[34px]
        text-[#FFFFFF]
        px-[94px]
    `
    return (
        <section className={footerStyle}>
            <ul className="footer-nav flex items-center">
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
