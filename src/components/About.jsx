import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gray-900 text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 text-cyan-200'>About</p>
        </div>
        <p className='text-xl font-medium mt-12'>I am a Computer Science Engineering and Business Systems student at Vellore Institute of Technology, Vellore. I am a sincere and disciplined individual with strong logical and analytical skills. Throughout my study, I have honed my skills in programming languages such as <span className='text-cyan-400'>C++, C, Java, HTML, CSS, JavaScript</span>. 
        I am also familiar with frameworks such as <span className='text-cyan-400'>ReactJs, Bootstrap, Tailwind CSS, Material UI</span>.</p>
        <br/>
        <p className='text-xl font-medium'>I am always open to new learning opportunities and look forward to working on challenging projects that allow me to continue growing as a computer science engineer.</p>
      </div>
    </div>
  )
}

export default About
