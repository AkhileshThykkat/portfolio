import React from 'react';
import Finedge from '../assets/Finedge.png';
import MovieBox from '../assets/moviebox.png';
import Todo from '../assets/todo.png';
import Image from 'next/image';
import linkLogo from '../assets/linkLogo.svg';
import githubNew from '../assets/githubnew.svg';

const Projects = () => {
  return (
    <>
      <div className='mt-[90px] bg-inherit'>
        <h1
          id='projects'
          className='font-michroma text-xl text-white text-center'
        >
          Projects
        </h1>
        <div className='w-[700px] h-[300px] flex flex-row justify-around items-start mx-auto my-[60px]'>
          <div>
            <Image
              isZoomed
              width={240}
              alt='NextUI Fruit Image with Zoom'
              src={Finedge}
              height={150}
              className='rounded-[20px] hover:scale-110 hover:bg-none hover:cursor-pointer bg-slate-800 transition-all   ease-in'
            />
          </div>
          <div className='font-inter text-lg text-white w-[50%] ml-9 px-3 py-1 flex flex-col'>
            <p>A portfolio page for FinEdge</p>
            <p>Built using Astro framework and tailwind css</p>
            <div className='flex flex-row mt-5'>
              <Image
                className='my-3 mx-5'
                src={githubNew}
                width={30}
                height={30}
                alt=''
              />
              <p className='mt-1'>Source Code</p>
            </div>
            <div className='flex flex-row'>
              <Image
                className='my-3 mx-5'
                src={linkLogo}
                width={30}
                height={30}
                alt=''
              />
              <p className='mt-1'>Live Link</p>
            </div>
          </div>
        </div>
        <div className='w-[700px] h-[300px] flex flex-row justify-around items-start mx-auto my-[80px]'>
          <div>
            <Image
              width={240}
              alt='NextUI Fruit Image with Zoom'
              src={MovieBox}
              height={150}
              className='rounded-[20px] hover:scale-110 hover:bg-none hover:cursor-pointer bg-slate-800 transition-all   ease-in'
            />
          </div>
          <div className='font-inter text-lg text-white w-[50%] ml-9 px-3 py-1 flex flex-col'>
            <p>A portfolio page for FinEdge</p>
            <p>Built using Astro framework and tailwind css</p>
            <div className='flex flex-row mt-5'>
              <Image
                className='my-3 mx-5'
                src={githubNew}
                width={30}
                height={30}
                alt=''
              />
              <p className='mt-1'>Source Code</p>
            </div>
            <div className='flex flex-row'>
              <Image
                className='my-3 mx-5'
                src={linkLogo}
                width={30}
                height={30}
                alt=''
              />
              <p className='mt-1'>Live Link</p>
            </div>
          </div>
        </div>
        <div className='w-[700px] h-[300px] flex flex-row justify-around items-start mx-auto my-[100px]'>
          <div>
            <Image
              isZoomed
              width={240}
              alt='NextUI Fruit Image with Zoom'
              src={Todo}
              height={150}
              className='rounded-[20px] hover:scale-110 hover:bg-none hover:cursor-pointer bg-slate-800 transition-all   ease-in'
            />
          </div>
          <div className='font-inter text-lg text-white w-[50%] ml-9 px-3 py-1 flex flex-col'>
            <p>A portfolio page for FinEdge</p>
            <p>Built using Astro framework and tailwind css</p>
            <div className='flex flex-row mt-5'>
              <Image
                className='my-3 mx-5'
                src={githubNew}
                width={30}
                height={30}
                alt=''
              />
              <p className='mt-1'>Source Code</p>
            </div>
            <div className='flex flex-row'>
              <Image
                className='my-3 mx-5'
                src={linkLogo}
                width={30}
                height={30}
                alt=''
              />
              <p className='mt-1'>Live Link</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
