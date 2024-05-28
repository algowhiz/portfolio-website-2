import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { RiGithubLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div className='bg-[#2D2E32] text-white flex justify-between p-16'>
      <div>
        <h1 className='font-extrabold'>Copyright © 2024. All rights are reserved</h1>
      </div>
      <div className="flex gap-6 justify-center md:justify-start">
        <a href='https://www.linkedin.com/in/manishkadam1/' target="_blank" rel="noopener noreferrer">
          <CiLinkedin className='cursor-pointer rounded-lg hover:scale-125' size={30} />
        </a>
        <a href='https://github.com/algowhiz' target="_blank" rel="noopener noreferrer">
          <RiGithubLine className='cursor-pointer rounded-lg hover:scale-125' size={30} />
        </a>


      </div>
    </div>
  )
}

export default Footer