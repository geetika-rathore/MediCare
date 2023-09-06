import React from "react";
import heroImage2 from "../assets/images/hero-img02.png"
import icons01 from "../assets/images/icon01.png"
import icons02 from "../assets/images/icon02.png"
import icons03 from "../assets/images/icon03.png"
import {Link} from "react-router-dom"
import { BsArrowRight } from "react-icons/bs"
import About from "../components/About/About"
import ServiceList from "../components/Services/ServiceList"
import fa from "../assets/images/feature-img.png"
import DoctorList from "../components/Doctors/DoctorList";
import faq from "../../src/assets/images/about-card.png"
import FaqList from "../components/faq/FaqList";
import Testinomails from "../components/Testimonials/Testinomails";
const Home = () => {
  return (
    <>
      {/* hero section */}

      <section className="hero_section pt-[60px] 2xl:h-[800px] ">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between ">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text_para ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Unde debitis, molestiae eos omnis quae at eaque? Neque vitae
                  accusantium eos.
                </p>
                <button className="btn">
                  Request an Appointment
                </button>
              </div>

              {/* hero counter*/}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px] ">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]">
                  </span>
                  <p className="text_para">
                    Years of Experience
                  </p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]">
                  </span>
                  <p className="text_para">
                    Clinic Location
                  </p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]">
                  </span>
                  <p className="text_para">
                    Patient Satisfaction
                  </p>
                </div>
              </div>
            </div>
            {/* hero images */}
            <div className="flex gap-[30px] justify-end ">
              <div>
                <img src={heroImage2} className="w-[650px] h-[550px] rounded-md " />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* hero section end */}

{/* icons section  */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center ">Providing the best medical services
            </h2>
            <p className="text_para">
              World-class care for everyone. Our health System offers unmatched, expert health care.
            </p>
          </div>

{/* icons */}
{/* 1st */}
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] ">
            <div className="py-[30px]  px-5 ">
              <div className="flex items-center justify-center ">
                <img src={icons01}  alt="icons1" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link to="/doctors" className=" w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none ">
                  <BsArrowRight className=" group-hover:text-white w-6 h-5 " />
                </Link>
              </div>
            </div>
{/* 2nd icons */}
<div className="py-[30px]  px-5 ">
              <div className="flex items-center justify-center ">
                <img src={icons02}  alt="icons1" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">
                  Find a Loaction
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link to="/doctors" className=" w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none ">
                  <BsArrowRight className=" group-hover:text-white w-6 h-5 " />
                </Link>
              </div>
            </div>
            {/* 3rd icon */}
            <div className="py-[30px]  px-5 ">
              <div className="flex items-center justify-center ">
                <img src={icons03}  alt="icons1" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center ">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center ">
                  World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.
                </p>

                <Link to="/doctors" className=" w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none ">
                  <BsArrowRight className=" group-hover:text-white w-6 h-5 " />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

{/* about section */}
<About />

{/* services section */}
<section>
  <div className="container">
    <div className="xl:w-[470px] mx-auto ">
<h2 className="heading text-center">
Our Medical Services
</h2>
<p className="text_para text-center ">
  Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Voluptatibus, enim.
</p>
    </div>

    <ServiceList />
  </div>
</section>
{/* services end */}

{/* features section */}
<section>
  <div className="container">
  <div className="flex items-center justify-between flex-col lg:flex-row ">
{/* content */}
<div className=" xl:w-[670px] ">
<h2 className="heading">
Get virtual treatment<br/>anytime.
</h2>

<ul className="pl-4">
<li className="text_para">
  1.Schedule the appointment directly.
</li>
<li className="text_para">
  2.Search for your physician hero , and contact their office.
</li>
<li className="text_para">
  3.View our physicians who are accepting new patients , use the online scheduling tool to select an appointment time.
</li>
</ul>
<Link to="/" ><button className="btn">Learn More</button></Link>
</div>
{/* img */}
<div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0  ">
<img src={fa} className="rounded-xl" />
</div>
  </div>

  </div>
</section>
{/* features section end */}

{/* our gr8 doctors */}
<section>
  <div className="container">
  <div className="xl:w-[470px] mx-auto ">
<h2 className="heading text-center">
Our Great Doctors
</h2>
<p className="text_para text-center ">
  Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Voluptatibus, enim.
</p>
    </div>

    <DoctorList />
  </div>
</section>

{/* faq section */}
<section>
  <div className="container">
    <div className="flex justify-between gap-[50px] lg:gap-0 ">
      <div className="w-1/2 hidden md:block ">
        <img src={faq} alt="faq" />
      </div>

      <div className="w-full md:w-1/2 ">
        <h2 className="heading">Most questions by our beloved patients</h2>
        <FaqList />
      </div>
    </div>
  </div>
</section>
{/* faq section end */}

{/* testimonial */}
<section>
  <div className="container">
  <div className="xl:w-[470px] mx-auto ">
<h2 className="heading text-center">
What our patients says
</h2>
<p className="text_para text-center ">
  Lorem ipsum dolor sit amet consectetur 
  adipisicing elit. Voluptatibus, enim.
</p>
    </div>
    <Testinomails />
  </div>
</section>
{/* testimonial end */}

    </>
  );
};

export default Home;
