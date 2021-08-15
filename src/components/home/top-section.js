import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Arrow from '../assets/arrow'
import CurlyArrow from '../assets/curly-arrow'
import TextBlob from '../assets/text-blob'

const TopSection = () => {
    const sectionStyle = `
    flex
    justify-between
    items-center
    px-[90px]
    `
    const leftPartStyle = `
    w-[612px]  
    `
    const formStyle= `
    mt-[24px]
    mb-[10px]
    border-[1px]
    rounded-[8px]
    py-[6px]
    pl-[24px]
    pr-[7px]
    flex
    justify-between
    max-w-[504px]
    hover:border-[#706E6E]
    transition ease-in duration-700
    `
    const buttonStyle= `
    bg-[#4C53FA]
    rounded-[4px]
    text-[#ffffff]
    py-[14px]
    px-[48px]
    `
    const sunStyle = `
    w-[496px]
    h-[372px]
    mt-[74px]
    `
    return (
        <section className={sectionStyle}>
            <div className={leftPartStyle}>
                <h1 className="text-[42px] pt-[170px] pb-[4px] font-display">iAffirm, It's a Positive Thing.</h1>
                <p className="text-[#706E6E]">Join in the fight back against negativity, with positive affirmations, and make somebody smile through iAffirm. We tweet these affirmations to spread positivity and help those facing tough times.
                </p>
                <form className={formStyle}>
                    <input
                    type="text"
                    placeholder="Enter your message. e.g I am ..., I will..."
                    className="w-full outline-none text-input"
                    />
                    <button type="submit" className={buttonStyle}>Affirm</button>
                </form>
                <a href="#
                https://twitter.com/" className="flex items-center text-page-blue">See Affirmations <Arrow/> </a>
            </div>

            <div className={sunStyle}>
                <StaticImage
                src="../../images/sun illustration.svg"
                quality="100"
                />
            </div>
        </section>
    )
}

export default TopSection
