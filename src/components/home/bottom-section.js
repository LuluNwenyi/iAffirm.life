import React from 'react'
import Logo from '../assets/logo'
import { StaticImage } from 'gatsby-plugin-image'

const BottomSection = () => {
    const sectionStyle=`
    flex
    flex-col
    md:flex-row
    justify-between
    items-center
    px-[32px]
    md:px-[60px]
    lg:px-[90px]
    py-28
    text-[#706E6E]
    bottom
    `
    return (
        <section className={sectionStyle}>
            <div className="">
                <Logo/>
                <p className="mt-[7px] mb-[24px] text-[#3D3D3D] ">Project by <a href="https://lulunwenyi.com">Lulu Nwenyi</a> </p>

                <p className="text-[14px] md:text-[15px] lg:text-[17px] xl:w-[620px] md:w-[50vw]">
                    Building this project was an amazing learning experience for me as its designer and backend developer. I also want to acknowledge my friend <a href="https://twitter.com/hafsyforever">Hafsah</a> who contributed to this project by building the frontend.  To give feedback or ideas/contributions, please find me on <a href="https://twitter.com/lulunwenyi">Twitter </a> and if you like this project or find it useful, you can <a href="https://buymeacoffee.com/lulunwenyi">buy me a coffee. 😊</a> 
                </p>
            </div>

            <div className="-mr-8">
                <StaticImage
                src="../assets/icons-src/stay positive illustration.svg"
                placeholder="blurred"
                />
            </div>
        </section>
    )
}

export default BottomSection
