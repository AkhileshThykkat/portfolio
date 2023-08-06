import React from 'react';
import Finedge from '../assets/Finedge.png';
import MovieBox from '../assets/moviebox.png';
import Todo from '../assets/todo.png';
import Image from 'next/image';
import linkLogo from '../assets/linkLogo.svg';
import githubNew from '../assets/githubnew.svg';
import Link from 'next/link';
const projectLinks = {
  findEdge: {
    sourceCode: 'https://github.com/AkhileshThykkat/Astro',
    liveLink: 'https://finedge-two.vercel.app/',
  },
  movieBox: {
    sourceCode: 'https://github.com/AkhileshThykkat/MovieBox',
    liveLink: 'https://movie-box-mu.vercel.app/',
  },
  todoapp: {
    sourceCode: 'https://github.com/AkhileshThykkat/todoApp',
    liveLink: 'https://todo-app-mauve-seven.vercel.app/',
  },
};
const Projects = () => {
  return (
    <>
      <div className='mt-10 bg-inherit'>
        <h1
          id='projects'
          className='font-michroma text-xl text-white text-center'
        >
          Projects
        </h1>
        <div className='mx-auto grid grid-cols-1 sm:w-[50%]  gap-8   my-10 px-4'>
          <div className='w-full flex flex-col md:flex-row items-start '>
            <Image
              isZoomed
              width={240}
              alt='NextUI Fruit Image with Zoom'
              src={Finedge}
              height={150}
              className='rounded-[20px] hover:scale-110 hover:bg-none hover:cursor-pointer mx-8 bg-slate-800 transition-all ease-in'
            />
            <div className='font-inter text-lg text-white mx-12 mt-4'>
              <p>A portfolio page for FinEdge</p>
              <p>Built using Astro framework and Tailwind CSS</p>
              <div className='flex flex-row mt-5'>
                <Image
                  className='my-3 mx-5'
                  src={githubNew}
                  width={30}
                  height={30}
                  alt=''
                />
                <p className='mt-1'>
                  <Link href={projectLinks.findEdge.sourceCode}>
                    Source Code
                  </Link>
                </p>
              </div>
              <div className='flex flex-row'>
                <Image
                  className='my-3 mx-5'
                  src={linkLogo}
                  width={30}
                  height={30}
                  alt=''
                />
                <p className='mt-1'>
                  <Link href={projectLinks.findEdge.liveLink}>Live Link</Link>
                </p>
              </div>
            </div>
          </div>
          <div className='w-full mx-auto flex flex-col md:flex-row items-start'>
            <Image
              isZoomed
              width={240}
              alt='NextUI Fruit Image with Zoom'
              src={MovieBox}
              height={140}
              className='rounded-[20px] mx-8 hover:scale-110 hover:bg-none hover:cursor-pointer bg-slate-800 transition-all ease-in'
            />
            <div className='font-inter text-lg mx-12 text-white mt-4'>
              <p>A movie searching app using react and material ui</p>
              <div className='flex flex-row mt-5'>
                <Image
                  className='my-3 mx-5'
                  src={githubNew}
                  width={30}
                  height={30}
                  alt=''
                />
                <p className='mt-1'>
                  <Link href={projectLinks.movieBox.sourceCode}>
                    Source Code
                  </Link>
                </p>
              </div>
              <div className='flex flex-row'>
                <Image
                  className='my-3 mx-5'
                  src={linkLogo}
                  width={30}
                  height={30}
                  alt=''
                />
                <p className='mt-1'>
                  <Link href={projectLinks.movieBox.liveLink}>Live Link</Link>
                </p>
              </div>
            </div>
          </div>
          <div className='w-full mx-auto flex flex-col md:flex-row items-start'>
            <Image
              isZoomed
              width={240}
              alt='NextUI Fruit Image with Zoom'
              src={Todo}
              height={150}
              className='rounded-[20px] mx-8 hover:scale-110 hover:bg-none hover:cursor-pointer bg-slate-800 transition-all ease-in'
            />
            <div className='font-inter text-lg mx-12 text-white mt-4'>
              <p>Todo app using react</p>
              <p>Built using react framework and Tailwind CSS</p>
              <div className='flex flex-row mt-5'>
                <Image
                  className='my-3 mx-5'
                  src={githubNew}
                  width={30}
                  height={30}
                  alt=''
                />
                <p className='mt-1'>
                  <Link href={projectLinks.todoapp.sourceCode}>
                    Source Code
                  </Link>
                </p>
              </div>
              <div className='flex flex-row'>
                <Image
                  className='my-3 mx-5'
                  src={linkLogo}
                  width={30}
                  height={30}
                  alt=''
                />
                <p className='mt-1'>
                  <Link href={projectLinks.todoapp.liveLink}>Live Link</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
