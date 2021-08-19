import React from 'react'
import CurlyArrow from '../assets/curly-arrow'
import TextBlob from '../assets/text-blob'

const MidSection = () => {
    const paragraphStyle=`
    text-page-dark 
    md:leading-[27.63px] 
    text-[14px] 
    md:text-[15px] 
    lg:text-[17px]
    `
    const headingStyle=`
    font-display 
    lg:text-[27px] 
    xl:text-[32px] 
    text-[20px] 
    mb-[4px]
    `
    const sectionStyle=`
    flex flex-col 
    md:flex-row 
    md:justify-between 
    justify-center 
    items-center 
    rounded-[12px] 
    w-full 
    md:pr-[66px] 
    pb-8 
    md:pt-8 
    -mt-16 
    bg-gradient-to-r from-[#f8f8ff] to-[#fdf4fe]
    `
    const containerStyle=`
    px-[32px] 
    md:px-[60px] 
    lg:px-[90px] 
    flex flex-col 
    items-center pt-4
    `
    const textWrapper = `
    lg:w-[570px] 
    md:w-[80%] 
    px-[17px] 
    md:px-0 
    -mt-8
    `
    return (
        <div className={containerStyle}>
            <CurlyArrow/>

            <section className={sectionStyle}>
                <span className="">
                    <TextBlob/>
                </span>

                <div className={textWrapper}>
                    <h1  className={headingStyle}>The psychology of Affirmations</h1>
                    <p className={paragraphStyle}>
                    Affirmations are a great way to subconsciously construct your mind and encourage yourself to believe in certain things. The subconscious mind plays a very important role in your life because it ensures that you respond the exact way you’re programmed. 
                    This is why positive affirmations are used to ensure positivity; your subconscious mind obeys the commands from your conscious mind.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default MidSection
