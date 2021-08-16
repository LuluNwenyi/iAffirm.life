import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Arrow from '../assets/arrow'

const TopSection = () => {
    const sectionStyle = `
    flex
    flex-col-reverse
    md:flex-row
    justify-between
    items-center
    px-[32px]
    md:px-[60px]
    lg:px-[90px]
    `
    const leftPartStyle = `
    md:w-[612px]  
    text-center
    md:text-left
    `
    const formStyle= `
    mt-[24px]
    mb-[10px]
    md:border-[1px]
    rounded-[8px]
    py-[6px]
    pl-[24px]
    pr-[7px]
    flex
    flex-col
    md:flex-row
    mx-auto
    md:mx-0
    justify-between
    max-w-[504px]
    hover:border-page-dark
    transition ease-in duration-700
    `
    const buttonStyle= `
    bg-page-blue
    rounded-[4px]
    text-[#ffffff]
    py-[10px]
    lg:py-[14px]
    lg:px-[48px]
    px-[28px]
    `
    const sunStyle = `
    lg:w-[500px]
    md:w-[450px]
    h-[372px]
    lg:mt-[64px]
    md:mt-[84px]
    `
    return (
        <section className={sectionStyle}>
            <div className={leftPartStyle}>
                <h1 className="xl:text-[42px] lg:text-[35px] text-[24px] md:mt-[170px] sm:mt-[24px] pb-[4px] font-display">iAffirm, It's a Positive Thing.</h1>
                <p className="text-page-dark text-[14px] sm:text-[15px] lg:text-[17px] ">Join in the fight back against negativity, with positive affirmations, and make somebody smile through iAffirm. We tweet these affirmations to spread positivity and help those facing tough times.
                </p>
                <form className={formStyle}>
                    <input
                    type="text"
                    placeholder="Enter your message. e.g I am ..., I will..."
                    className=" md:w-[68%] w-full border-[1px]
                    rounded-[4px] py-[10px] px-[21px] md:px-0 md:py-0 md:mb-0 mb-2 md:border-none outline-none"
                    />
                    <button type="submit" className={buttonStyle}>Affirm</button>
                </form>
                <a href="https://twitter.com/iaffirmbot" className="flex items-center text-page-blue mt-16 md:mt-0">See Affirmations <Arrow/> </a>
            </div>

            <div className={sunStyle}>
                <StaticImage
                src="../../images/sun illustration.svg"
                quality="100"
                className="animate-sun-in-out  md:mt-16 lg:mt-8 xl:mt-0"
                placeholder="blurred"
                />
            </div>
        </section>
    )
}

export default TopSection
