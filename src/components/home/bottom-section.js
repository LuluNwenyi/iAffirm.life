import React from 'react'
import Logo from '../assets/logo'
import { StaticImage } from 'gatsby-plugin-image'

const BottomSection = () => {
    const sectionStyle=`
    flex
    justify-between
    items-center
    px-[90px]
    py-28
    text-[#3D3D3D]
    bottom
    `
    return (
        <section className={sectionStyle}>
            <div className="">
                <Logo/>
                <p className="mt-[7px] mb-[24px]">Project by <a href="https://lulunwenyi.com">Lulu Nwenyi</a> </p>
                <p className="text-[17px] w-[618px]">
                    Building this project was an amazing learning experience for me as its designer and backend developer. I also want to acknowledge my friend <a href="/something">Hafsah</a> who contributed to this project by building the frontend.  To give feedback or ideas/contributions, please find me on Twitter and if you like this project or find it useful, you can <a href="https://buymeacoffee.com/lulunwenyi">buy me a coffee. 😊</a> 
                </p>
            </div>

            <div className="-mr-8">
                <StaticImage
                src="../assets/icons-src/stay positive illustration.svg"
                quality="100"
                />
            </div>
        </section>
    )
}

export default BottomSection
