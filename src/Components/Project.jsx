import React from 'react';
import img1 from '../../public/netflix.png';
import img2 from '../../public/mole.png';
import img4 from '../../public/drag.png';
import img5 from '../../public/curr.png';
import img6 from '../../public/myntra.png';
import img7 from '../../public/fileuploader.png';
import img8 from '../../public/cal.png';
import img9 from '../../public/cozyreads.png';
import Projects_Cards from './Projects_Cards';
import { FaHtml5, FaJsSquare, FaReact, FaNodeJs } from 'react-icons/fa';
import { BiLogoTailwindCss } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoCss3 } from 'react-icons/io';
import { DiMongodb } from "react-icons/di";

const projects = [
  {
    id: 1,
    img: img1,
    projectName: 'Netflix-UI',
    projectDesc: `Built with React.js and powered by Redux, this project is a faithful recreation of the Netflix user interface. Leveraging React's component-based architecture and Redux for state management, it delivers a seamless and interactive browsing experience reminiscent of the popular streaming platform.`,
    langIcons: [<FaHtml5 key="html" color='#EA580C' size={30} />, <IoLogoCss3 color='#3B82F6'  key="css" size={30} />, <FaJsSquare color='#FDE047' key="js" size={30} />, <FaReact key="react" color='#00D8FF' size={30} />, <BiLogoTailwindCss color='#27B8BD'  key="tailwindcss" size={30} />, <IoLogoFirebase color='#ED7B16'  key="tailwindcss" size={30} />],
    link: 'https://github.com/algowhiz/Clones/tree/main/src',
    disable: true,
    spanTwoColumns: true,
  },
  {
    id: 2,
    img: img6,
    projectName: 'Myntra Clone',
    projectDesc: `Built using HTML, CSS, JavaScript, React , Node.js and React-Redux this project is a clone of the popular e-commerce website Myntra. It showcases a responsive design and interactive features similar to the original site like add to cart and remove from cart and final bill invoice.`,
    langIcons: [<FaHtml5 key="html" color='#EA580C' size={30} />, <IoLogoCss3 color='#3B82F6'  key="css" size={30} />, <FaJsSquare color='#FDE047' key="js" size={30} />, <FaNodeJs key="nodejs" size={30} />, <FaReact key="react" color='#00D8FF' size={30} />],
    link: 'https://github.com/algowhiz/Projects/tree/main/api',
    disable: true,
    spanTwoColumns: false,
  },
  {
    id: 3,
    img: img4,
    projectName: 'Dragon game',
    projectDesc: `A fun and interactive dragon-themed game built with HTML, CSS, and JavaScript. This game challenges players to complete various tasks and levels while navigating through a fantasy world.`,
    langIcons: [<FaHtml5 key="html" color='#EA580C' size={30} />, <IoLogoCss3 color='#3B82F6'  key="css" size={30} />, <FaJsSquare color='#FDE047' key="js" size={30} />],
    link: 'https://github.com/algowhiz/Projects/tree/main/dragon',
    live: 'https://dragon-game-3636.netlify.app/',
    spanTwoColumns: false,
  },
  {
    id: 4,
    img: img2,
    projectName: 'Whack a Mole',
    projectDesc: `An interactive "Whack a Mole" game built with HTML, CSS, and JavaScript. Players must hit the moles that pop up randomly to score points within a given time.`,
    langIcons: [<FaHtml5 key="html" color='#EA580C' size={30} />, <IoLogoCss3 color='#3B82F6'  key="css" size={30} />, <FaJsSquare color='#FDE047' key="js" size={30} />],
    link: 'https://github.com/algowhiz/Projects/tree/main/mole_game',
    live: 'https://65df6f96d7636742e56eaaf4--remarkable-cranachan-1fd9ee.netlify.app/',
    spanTwoColumns: true,
  },
  {
    id: 5,
    img: img7,
    projectName: 'File Uploader',
    projectDesc: `A file uploader application built with React.js. This project allows users to upload files to the server and generate online link from where user can download that file`,
    langIcons: [<FaHtml5 key="html" color='#EA580C' size={30} />, <IoLogoCss3 color='#3B82F6'  key="css" size={30} />, <FaJsSquare color='#FDE047' key="js" size={30} />, <FaReact key="react" color='#00D8FF' size={30} />],
    link: 'https://github.com/algowhiz/Projects/tree/main/file_uploader',
    spanTwoColumns: true,
  },
  {
    id: 6,
    img: img8,
    projectName: 'Calculator',
    projectDesc: `A simple yet functional calculator built with HTML, CSS, and JavaScript. This calculator can perform basic arithmetic operations and has a user-friendly interface.`,
    langIcons: [<FaHtml5 key="html" color='#EA580C' size={30} />, <IoLogoCss3 color='#3B82F6'  key="css" size={30} />, <FaJsSquare color='#FDE047' key="js" size={30} />],
    link: 'https://github.com/algowhiz/Projects/tree/main/calculator',
    live: 'https://calculator-app.netlify.app/',
    spanTwoColumns: false,
  },
  {
    id: 7,
    img: img5,
    projectName: 'Currency Converter',
    projectDesc: `A currency converter tool that allows users to convert between different currencies using up-to-date exchange rates. This application makes use of API calls to fetch the latest exchange rates and flag images.`,
    langIcons: [<FaHtml5 key="html" color='#EA580C' size={30} />, <IoLogoCss3 color='#3B82F6'  key="css" size={30} />, <FaJsSquare color='#FDE047' key="js" size={30} />],
    link: 'https://github.com/algowhiz/Projects/tree/main/currency_converter',
    spanTwoColumns: false,
  },
  {
    id: 8,
    img: img9,
    projectName: 'Cozy Reads',
    projectDesc: `Cozy Reads is a book review and recommendation platform built with React.js, Tailwind CSS, and MongoDB. It provides a user-friendly interface for book lovers to discover, review, and recommend books.`,
    langIcons: [<FaHtml5 key="html"  color='#EA580C' size={30} />, <IoLogoCss3 color='#3B82F6'  key="css" size={30} />, <FaJsSquare color='#FDE047' key="js" size={30} />, <FaReact key="react" color='#00D8FF' size={30} />, <BiLogoTailwindCss color='#27B8BD'  key="tailwindcss" size={30} />, <DiMongodb key="mongodb" color='#3F9230' size={30} />],
    link: 'https://github.com/algowhiz/Projects/tree/main/cozy_reads',
    spanTwoColumns: true,
  }
];

const Project = () => {
  return (
    <div>
      <h1 className='text-3xl text-blue-500 font-bold text-center '>Project</h1>
      <div className="container mx-auto p-6" id="projects">
        <Projects_Cards projects={projects} />
      </div>
    </div>
  )
}

export default Project;
