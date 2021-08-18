import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import Arrow from '../assets/arrow'
import AffirmationForm from "./form"

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
    md:pt-[50px]
    `
    const leftPartStyle = `
    md:w-[612px]  
    text-center
    md:text-left
    text-[14px] 
    sm:text-[15px] 
    lg:text-[17px] 
    text-page-dark
    `
    const sunStyle = `
    lg:w-[500px]
    md:w-[450px]
    md:h-[372px]
    lg:mt-[64px]
    mt-[84px]
    `
    return (
        <section className={sectionStyle}>
            <div className={leftPartStyle}>
                <h1 className="xl:text-[42px] lg:text-[35px] text-[24px] md:mt-[170px] sm:mt-[24px]  pb-[4px] font-display text-black">iAffirm, It's a Positive Thing.</h1>
                <p className="">Join in the fight back against negativity, with positive affirmations, and make somebody smile through iAffirm. We tweet these affirmations to spread positivity and help those facing tough times.
                </p>
                
                <AffirmationForm/>

                <a href="https://twitter.com/iaffirmbot" className="flex items-center text-page-blue mt-16 md:mt-[8px]">See Affirmations <Arrow/> </a>
            </div>

            <div className={sunStyle}>
                <StaticImage
                src="../../images/sun illustration.svg"
                quality="100"
                className="animate-sun-in-out  md:mt-16 lg:mt-8 xl:mt-0"
                placeholder="blurred"
                alt="sun"
                />
            </div>
        </section>
    )
}

export default TopSection
