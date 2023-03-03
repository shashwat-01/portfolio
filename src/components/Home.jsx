import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { RiArrowRightSLine } from "react-icons/ri"
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gray-900 '>

      <div className='max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-6xl font-bold text-white'>I'm a <span className=' text-cyan-400 hover:text-emerald-300 duration-500 '>Front-end Developer</span> & <span className=' text-cyan-400 hover:text-emerald-300 duration-500'>Designer</span></h2>
          <p className='text-gray-500 py-4 font-medium'>Welcome to my portfolio website! I am a Computer Science Engineering and Business Systems student at VIT Vellore.  I have a passion for creating visually appealing and user-friendly websites. Feel free to get in touch if you have any questions or opportunities.</p>

          <div>
            <Link to='projects' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Projects  
              <span className='group-hover:rotate-90 duration-300'><RiArrowRightSLine size={25} className='ml-1'/></span>
            </Link>
          </div>
        </div>

        <div>
          <img src={HeroImage} alt="my profile" className='rounded-xl mx-4 w-2/3 md:w-full hover:-translate-y-2 hover:translate-x-2 duration-500' />
        </div>
      </div>
    </div>
  )
}

export default Home
