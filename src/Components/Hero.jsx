import React from 'react';
import logo from "../../public/img2.jpg";
import { CiLinkedin } from "react-icons/ci";
import { RiGithubLine, RiNodejsLine } from "react-icons/ri";
import { SiHtml5, SiCss3, SiTailwindcss } from "react-icons/si";
import { DiJsBadge, DiSass } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div className="flex justify-center items-center h-screen mt-16 md:mt-0 hero-section" id='home'>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10 md:mt-20">
                    <div className="order-2 md:order-1 flex flex-col justify-center items-center md:items-start">
                        <h1 className='text-4xl md:text-5xl text-[#2D2E32] font-semibold mb-4 text-center md:text-left'>Front-End React <br /> Developer 👋 </h1>
                        <p className='text-base md:text-lg text-gray-500 mb-8 text-center md:text-left'>Hi, I'm Manish Kadam. A passionate Front-end React Developer based in Kolhapur, Maharashtra. 📍</p>
                        <div className="flex gap-4 justify-center md:justify-start">
                        <a href='https://www.linkedin.com/in/manishkadam1/' target="_blank" rel="noopener noreferrer">
                                <CiLinkedin className='cursor-pointer rounded-lg hover:bg-blue-600 hover:text-white ' size={25} />
                            </a>
                            <a href='https://github.com/algowhiz' target="_blank" rel="noopener noreferrer">
                                <RiGithubLine className='cursor-pointer rounded-lg hover:bg-black hover:text-white' size={25} />
                            </a>
                        </div>
                        <div className="mt-12">
                            <p className="font-bold mb-4 text-center md:text-left">Tech Stack</p>
                            <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                                <span className='flex items-center gap-2 hover:transform hover:-translate-y-1 transition-transform duration-200'>
                                    <SiHtml5 size={40} className='text-orange-600' /> <SiCss3 size={40} className='text-blue-500' />
                                </span>
                                <span className='flex items-center gap-2 hover:transform hover:-translate-y-1 transition-transform duration-200'>
                                    <DiJsBadge size={40} className='text-yellow-300  rounded-lg' /> <FaReact size={40} className='text-[#00D8FF]' />
                                </span>
                                <span className='flex items-center gap-2 hover:transform hover:-translate-y-1 transition-transform duration-200'>
                                    <SiTailwindcss className='text-[#27B8BD]' size={40} /> <RiNodejsLine className='text-[#80BD02]' size={40} />
                                </span>
                                <span className='flex items-center gap-2 hover:transform hover:-translate-y-1 transition-transform duration-200'>
                                    <TbBrandRedux className='text-[#764ABC]' size={40} /> <DiSass className='text-[#CD6799]' size={40} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex justify-center md:justify-end mt-4 md:mt-0">
                        <img src={logo} alt="Profile" className="object-cover rounded-full w-48 h-48 md:w-96 md:h-96 animation" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
