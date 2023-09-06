import React from 'react'
import DocImage from "../../assets/images/doctor-img01.png"
import { Link } from "react-router-dom"
const About = () => {
  return (
    <section>
      <div className="container">
        <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0  flex-col lg:flex-row '>
          {/* about img  */}
          <div>
            <img src={DocImage} alt='doctor' className='rounded-md' />
          </div>

          <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 '>
            <h2 className='heading'>
              Proud to be one of the nations best
            </h2>
            <p className='text_para'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Corrupti consequuntur maxime molestias odit omnis
                assumenda quae fugit aut officiis eveniet dolores
                 dolore hic, explicabo ipsam.
            </p>
            <p className='text_para mt-[30px]'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Corrupti consequuntur maxime molestias odit omnis
                assumenda quae fugit aut officiis eveniet dolores
                 dolore hic, explicabo ipsam.
            </p>

            <Link to="/"><button className='btn'>Learn More</button></Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;