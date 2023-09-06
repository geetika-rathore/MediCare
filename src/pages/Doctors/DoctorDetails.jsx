import React, { useState } from 'react'
import img from "../../assets/images/about-card.png"
import Star from "../../assets/images/Star.png"
import DoctorAbout from './DoctorAbout'
import DoctorFeedback from './DoctorFeedback'
import SidePanel from './SidePanel'
const DoctorDetails = () => {
  const [tab, setTab] = useState('about');

  return (
    <section>
      <div className=' max-w-[1170px] px-5 mx-auto '>
        <div className="grid md:grid-cols-3 gap-[50px] ">
          <div className='md:col-span-2'>
            <div className=' flex items-center gap-5 '>
              <figure>
                <img src={img} alt="doctor img" className=' border-black w-[350px] h-[350px] ' />
              </figure>

              <div>
                <span className=' bg-[#CCF0F3] text-irisBlueColor py-1 px-6 lg:py-2 lg:px-6 text-[12px]  leading-4 lg:text-[16px] lg:leading-7 font-semibold rounded  '>
                  Surgeon
                </span>
                <h3 className=' text-headingColor text-[22px] leading-9 mt-3 font-bold  '>
                  Devendra Yadav
                </h3>
                <div className=' flex items-center gap-[6px] '>
                  <span className=' flex items-center gap-[6px] text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-semibold text-headingColor  '>
                    <img src={Star} alt='star' />
                  </span>
                  <span className=' text-[14px] leading-5 lg:text-[16px] lg:leading-7 font-[400] text-textColor '>
                    (300)
                  </span>
                </div>

                <p className=' text_para text[14px] leading-6 md:text-[15px] lg:max-w-[390px]  '>
                  Lorem ipsum dolor sit amet consectetur
                  adipisicing elit.
                  Adipisci inventore doloremque libero nostrum.
                </p>

              </div>

            </div>

            <div className=' mt-[50px] border-b border-solid border-[#0066ff34] '>
              <button className={` ${tab === "about" && " border-b border-solid border-primaryColor "}  py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold `}
                onClick={() => setTab('about')}
              >About</button>
              <button
                onClick={() => setTab('feedback')}
                className={`${tab === "feedback" && " border-b border-solid border-primaryColor "} py-2 px-5 mr-5 text-[16px] leading-7 text-headingColor font-semibold `}>Feedback</button>
            </div>

            <div className='mt-[50px]'>
              {
                tab === "about" && <DoctorAbout />
              }
              {
                tab === "feedback" && <DoctorFeedback />
              }
            </div>
          </div>
          <div>
            <SidePanel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DoctorDetails