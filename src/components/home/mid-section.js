import React from 'react'
import CurlyArrow from '../assets/curly-arrow'
import TextBlob from '../assets/text-blob'

const MidSection = () => {
    return (
        <div className="px-[90px] flex flex-col items-center pt-4">
            <CurlyArrow/>

            <section className="flex justify-between items-center  bg-page-grey rounded-[8px] w-full pr-[66px] py-8 -mt-16">
                <span className="w-[384px] ">
                    <TextBlob/>
                </span>

                <div className="w-[570px]">
                    <h1  className="font-display text-[32px] mb-[4px]">The psychology of Affirmations</h1>
                    <p className="text-page-dark leading-[27.63px] text-[17px]">
                    Affirmations are a great way to subconsciously construct your mind and encourage yourself to believe in certain things. The subconscious mind plays a very important role in your life because it ensures that you respond the exact way you’re programmed. 
                    This is why positive affirmations are used to ensure positivity; your subconscious mind obeys the commands from your conscious mind.
                    </p>
                </div>
            </section>
        </div>
    )
}

export default MidSection
