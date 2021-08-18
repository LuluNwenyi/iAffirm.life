import React from 'react'
import Logo from '../assets/logo'
import StayPositive from '../assets/stay-positive'
import { StaticImage } from 'gatsby-plugin-image'
import Heart from '../assets/heart'

const BottomSection = () => {
    const sectionStyle=`
    flex
    flex-col
    md:flex-row
    md:justify-between
    justify-center
    items-center
    px-[32px]
    md:px-[60px]
    lg:px-[90px]
    lg:pb-28
    pt-28
    text-[#706E6E]
    bottom
    `
    return (
        <section className={sectionStyle}>
            <div className="">
                <Logo/>
                <p className="mt-[7px] mb-[24px] text-[#3D3D3D] ">Project by <a href="https://lulunwenyi.com">Lulu Nwenyi</a> </p>

                <p className="text-[14px] md:text-[15px] lg:text-[17px] xl:w-[620px] md:w-[50vw]">
                    Building this project was an amazing learning experience for me as its designer and backend developer. I also want to acknowledge my friend <a href="https://twitter.com/hafsyforever">Hafsah</a> who contributed to this project by building the frontend.  To give feedback or ideas/contributions, please find me on <a href="https://twitter.com/lulunwenyi">Twitter </a> and if you like this project or find it useful, you can <a href="https://buymeacoffee.com/lulunwenyi">buy me a coffee.</a> 😊
                </p>
            </div>

            <div className="relative" >
                <span className="flex justify-center items-center lg:-mr-16">
                    <StayPositive/>
                    <span className="absolute  w-8 xl:left-[335px]  lg:left-[245px] left-52 bottom-[165px] hidden md:block" >
                    <Heart/>
                    </span>
                </span>
               
            </div>
        </section>
    )
}

export default BottomSection
