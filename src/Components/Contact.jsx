import React from 'react';
import { TbMapPin2 } from "react-icons/tb";
import { CiMail } from "react-icons/ci";

const Contact = () => {
    return (
        <div className='py-16 px-4 md:px-20' id='contact'>
            <div className='flex flex-col justify-center items-start'>
                <div className='mb-8'>
                    <p className='text-blue-500 font-extrabold text-xl'>CONTACT</p>
                    <p className='text-xl font-extrabold'>Don't be shy! Hit me up! 👇</p>
                </div>
                <div className='flex flex-col md:flex-row gap-10 mt-11'>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <TbMapPin2 size={50} className='text-blue-500 ' />
                        <div>
                            <a href="https://www.google.com/maps/dir/Kolhapur,+Maharashtra/16.6703131,74.1998972/@16.6788007,74.176379,14z/data=!4m8!4m7!1m5!1m1!1s0x3bc1000cdec07a29:0xece8ea642952e42f!2m2!1d74.2432527!2d16.7049873!1m0?entry=ttu"  target="_blank" rel="noopener noreferrer" className="hover:underline">
                                <p className='font-bold'>Location</p>
                                <p>Kolhapur, Maharashtra India</p>
                            </a>
                        </div>
                    </div>
                    <div className='flex  items-center gap-3 cursor-pointer hover:underline '>
                    <a href="mailto:manishkadam219@gmail.com" className="flex items-center gap-2">
                        <CiMail size={50} className='text-blue-500 hover:text-red-600' />
                        <div>
                            <p className='font-bold'>Mail</p>
                            <p>manishkadam219@gmail.com</p>
                        </div>
                    </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
