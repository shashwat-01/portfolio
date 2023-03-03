import React,{useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Button, Link} from 'react-scroll'

const NavBar = () => {

    const [Nav, setNav] = useState(false);

    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'projects'
        },
        {
            id:4,
            link:'skills'
        }
    ]
  return (
    <div className='flex justify-between items-center px-4 w-full h-16 text-white bg-black fixed'>
        <div>
            <h1 className='text-2xl font-signature ml-2'>Shashwat Anand</h1>
        </div>

        <ul className='hidden md:flex'>

        <li>
            
            <a href='/Resume Shashwat.pdf' className='px-4 cursor-pointer capitalize text-cyan-400 font-semibold hover:scale-105 duration-200 hover:text-teal-800' download = {true} target="_blank" rel="noreferrer">
                RESUME
            </a>
            </li>

            {
                links.map(({id,link})=>(
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:text-cyan-400'>
                    <Link to={link} smooth duration={500}>{link}</Link>
                    </li>

                ))
            }

            

        </ul>

        <div onClick={()=>setNav(!Nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {Nav?<FaTimes size={30}/>:<FaBars size={30}/>}
        </div>

        {Nav && (
            <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-gray-500'>

            {
                    links.map(({id,link})=>(
                        <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
    
                    ))
            }
    
    
            </ul>

        )}
      
    </div>
  )
}

export default NavBar
