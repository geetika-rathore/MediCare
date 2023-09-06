import React, { useState } from 'react'
import avatar from "../../assets/images/patient-avatar.png"
import {AiFillStar} from "react-icons/ai"
import FeedbackForm from './FeedbackForm'
const DoctorFeedback = () => {

    const [showFeed,setFeed] =useState(false);


    return (
        <div>
            <div className='mb-[50px]'>
                <h4 className=' text-[20px] leading-[30px] font-bold text-headingColor mb-[30px] '>
                    All reviews (314)
                </h4>

                <div className='flex justify-between gap-10 mb-[30px]'>
                    <div className=' flex gap-3 '>
                        <figure className='w-10 h-10 rounded-full ' >
                            <img src={avatar} alt="person" />
                        </figure>

                        <div>
                            <h5 className=' text-[16px] leading-6 text-primaryColor font-bold '>
                                Rishi Joshi
                            </h5>
                            <p className=' text-[14px] leading-6 text-textColor   '>
                                02 june,2022
                            </p>
                            <p className=' text_para mt-3 font-medium text-[15px] '>Good services,highly recommended👍
                            </p>
                        </div>
                    </div>

<div className=' flex gap-1 '>
{[...Array(5).keys()].map((_,index)=> <AiFillStar key={index} color="#0067FF" /> )}
</div>

                </div>
            </div>

{
    !showFeed &&
<div className="text-center"><button className="btn" onClick={()=>setFeed(true)} >Give Feedback</button></div>

}

{
    showFeed && <FeedbackForm />
}
        </div>
    )
}

export default DoctorFeedback