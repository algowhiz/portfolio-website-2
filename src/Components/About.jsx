import React from 'react';
import img from '../../public/about.webp'

const About = () => {
    return (
        <div className='flex justify-center items-center my-auto py-20 md:p-[147px] md:mt-0 lg:mt-0' id='about'>
        <div className='flex flex-col md:flex-row gap-16 justify-center items-center'>
            <div className='p-7 md:p-0'>
                <img src={img} className=' md:w-[723px] h-auto rounded-xl' alt="Manish Kadam" />
            </div>
            <div className='text-center md:text-left'>
                <h3 className='text-xl font-bold mb-2 text-blue-500'>ABOUT ME</h3>
                <h2 className='text-3xl font-semibold mb-4'>
                    Front-end Developer<br />
                    based in Maharashtra, India 📍
                </h2>
                <p className='text-gray-600 '>
                    Hey, my name is Manish, and I'm a Frontend Developer. My passion is to create and develop a clean webpage for my users.<br /><br />
                    My main stack currently is React in combination with Tailwind CSS.
                </p>
            </div>
        </div>
    </div>
    )
}

export default About