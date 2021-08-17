import React, {useState} from "react"
import GreenArrow from '../assets/green-arrow'
import RedArrow from '../assets/red-arrow'
import Loading from "../assets/loading"

const AffirmationForm = () => {
    const [affirmation, setAffirmation] = useState("")
    const [affirmationEntered, setAffirmationEntered] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        if(affirmation == ""){
            setAffirmationEntered(false)
        }else{
            setLoading(true)
            alert(affirmation)
            setTimeout(function(){
                setLoading(false)
                setAffirmationEntered(true)
            }, 3000)
        }
        setAffirmation("")
    }

    const formStyle= `
    mt-[24px]
    mb-[8px]
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
    flex 
    justify-center 
    `
    const inputStyle=`
    md:w-[68%] 
    w-full border-[1px]
    rounded-[4px] 
    py-[10px] 
    px-[21px] 
    md:px-0 
    md:py-0 
    md:mb-0 
    mb-2 
    md:border-none 
    outline-none
    `
    return (
        <>
        <form className={formStyle} onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter your message. e.g I am ..., I will..."
            onChange={e => setAffirmation(e.target.value)}
            value={affirmation}
            className={inputStyle}
            />
            <button 
            type="submit" 
            className={buttonStyle}
            >
                {loading ? <Loading/> : "Affirm"}
            </button>
        </form>

        {/*enter affirmation alert */}
        <p className="flex items-center justify-center md:justify-start">
            {affirmationEntered === false ? <>  <RedArrow/> Please enter an affirmation. </> : affirmationEntered === true ?<><GreenArrow/> Thank you for making someone smile! </> : null }
        </p>
        </>
    )
}

export default AffirmationForm