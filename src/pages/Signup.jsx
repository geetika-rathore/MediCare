import React, { useState } from 'react'
import signupimg from "../assets/images/signup.gif"
import avatar from "../assets/images/avatar2.png"
import { Link} from "react-router-dom"
const Signup = () => {
const [selectedFile,setSelectedFile] =useState(null);
const [previewUrl,setPreviewUrl] =useState('');

  const [formData, setData] = useState({
    fullName: '',
    email: '',
    password: '',
photo:selectedFile,
role:"patient",
gender:" "
  })
  const handleInput = e=>{
    setData({...formData , [e.target.name]:e.target.value})
  }

  const handleFile = async (event) =>{
    const file = event.target.files[0]
    //later we use 
    console.log(file)
  }
const submitHandler = async (event) =>{
  event.preventDefault();
}
  return (
    <section className=' px-5 xl:px-0 '>
      <div className='max-w-[1170px]  mx-auto'>
        <div className=' grid grid-cols-1 lg:grid-cols-2 '>
          {/* img */}
          <div className=' hidden lg:block bg-primaryColor rounde-l-lg '>
            <figure>
              <img src={signupimg} alt="signup" className='w-full rounded-l-lg ' />
            </figure>
          </div>
          {/* form */}
          <div className='rounded-l-lg lg:pl-16 py-10 '>
            <h3 className=' text-headingColor text-[22px] leading-9 font-bold mb-7 '>
              Create an <span className=' text-primaryColor '>account</span>
            </h3>

            <form>
              <div className='mb-5'>
                <input type='text'
                  name='fullName'
                  value={FormData.fullName}
                  onChange={handleInput}
                  placeholder='Enter Your Full Name'
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
    placeholder:text-headingColor cursor-pointer  " required
                />
              </div>

              <div className=" mb-5 ">
                <input type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={FormData.email}
                   onChange={handleInput}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
    placeholder:text-headingColor cursor-pointer  " required
                />
              </div>
              <div className='mb-5'>
                <input type='password'
                  name='password'
                  value={FormData.password}
                  onChange={handleInput}

                  placeholder='Enter Your Password'
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
    placeholder:text-headingColor cursor-pointer  " required
                />
              </div>

              <div className='mb-5  flex items-center justify-between  '>
                <label className=' text-headingColor font-bold text-[16px] leading-7'>
                  Are you a:
                  <select name='role' 
                  value={formData.role}
                  onChange={handleInput}
                  className=' text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none '>
                    <option value="patient" >Patient</option>
                    <option value="doctor">Doctor</option>

                  </select>

                </label>

                <label className=' text-headingColor font-bold text-[16px] leading-7'>
                  Gender:
                  <select name='gender'
                  value={formData.gender}
                  onChange={handleInput}
                  className=' text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none '>
                    <option>Select</option>
                    <option value="male" >Male</option>
                    <option value="female">Female</option>
                    <option value="other">Others </option>
                  </select>
                </label>
              </div>

              <div className='mb-5 flex  items-center gap-3 '>
                <figure className='w-[60px] h-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center justify-center' >
                  <img src={avatar} alt="avatar" className=' rounded-full w-full ' />
                </figure>

                <div className=' relative w-[130px] h-[50px] '>
                  <input type='file'
                    name='photo'
                    id='customerFile'
                    accept='.jpg,.png'
                    onChange={handleFile}
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer '
                  />
                  <label htmlFor='customerFile'
                    className=' absolute top-0 left-0 
 w-full h-full flex items-center 
 px-[0.75rem] py-[0.375rem] text-[15px] 
 leading-6 overflow-hidden bg-[#0066ff46]
  text-headingColor font-semibold 
  rounded-lg truncate cursor-pointer'>
                    Upload Photo</label>
                </div>
              </div>
              <div className="mt-7">
                <button type="submit"
                  className=" w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3  "
                >
                  Register
                </button>
              </div>

              <p className=" mt-5 text-textColor text-center ">Already  have an account?
                <Link to='/login' className=" text-primaryColor font-medium ml-1 " >login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup