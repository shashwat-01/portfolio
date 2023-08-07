import React from 'react'
import TextUtils from '../assets/portfolio/TextUtils.png'
import Typingthumbnail from '../assets/portfolio/Typingthumbnail.png'
import Weather from '../assets/portfolio/weather-app.png'
import Blog from '../assets/portfolio/blog.png'

const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src: Typingthumbnail,
            link: "https://shashwat-01.github.io/Typing_Test/",
            codeLink: "https://github.com/shashwat-01/Typing_Test"
        },
        {
            id:2,
            src: TextUtils,
            link: "https://shashwat-01.github.io/TextUtils/",
            codeLink: "https://github.com/shashwat-01/TextUtils"
        },
        {
            id:3,
            src: Weather,
            link: "https://shashwat-01.github.io/weather-app/",
            codeLink: "https://github.com/shashwat-01/weather-app"
        },
        {
            id:4,
            src: Blog,
            link: "https://shashwat-01.github.io/blogging-app/",
            codeLink: "https://github.com/shashwat-01/blogging-app"

        }
    ]

    const handleClick = (link) => {
        window.open(link, "_blank");
      };


  return (
    <div name="projects" className='bg-gray-900 w-full text-white md:h-screen'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
        <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-cyan-200'>Projects</p>
        <p className='py-6'>Check out some of my work</p>
        </div>

        
        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
            portfolios.map(({id,src,link,codeLink})=>(
                <div key={id} className=' shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                    <button onClick={() => handleClick(link)} className='w-1/2 px-6 py-3 m-4 font-bold duration-200 hover:scale-105 hover:text-cyan-400'>Demo</button>
                    <button onClick={() => handleClick(codeLink)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-cyan-400'>Code</button>
                </div>
            </div>
            ))
        }
        </div>
      </div>

    </div>
  )
}

export default Portfolio
