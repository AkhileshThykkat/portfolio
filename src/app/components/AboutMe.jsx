import React from 'react';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import logoHtml from '../assets/html.svg';
import logoCss from '../assets/css.svg';
import logoJS from '../assets/javascript.svg';
import logoReact from '../assets/react.svg';
import logoPython from '../assets/python.svg';
import logoC from '../assets/C.svg';
import Link from 'next/link';
const AboutMe = () => {
  const pdfLink =
    'https://drive.google.com/file/d/1mQGMUfZ8sNAPgRj-b0YFXvxN9LlgjPoi/view?usp=sharing';
  return (
    <>
      <h1 id='about' className='font-michroma text-xl text-center mt-7'>
        About Me
      </h1>
      <div className='sm:w-[500px] mt-4  lg:w-[800px] lg:h-[300px] mx-0 md:mx-auto text-white flex sm:flex-row flex-col flex-wrap justify-evenly items-center'>
        <div className='flex flex-col items-center ml-[10px]  md:ml-[40px] '>
          <h2 className='font-michroma my-4 text-base text-gray-400'>
            Technologies I use
          </h2>
          <div className='flex flex-col mx-7 '>
            <div className='flex flex-row  mb-2 md:my-5'>
              <Image
                className='mx-2'
                src={logoHtml}
                width={40}
                height={40}
                alt=''
              />
              <Image
                className='mx-2'
                src={logoCss}
                width={40}
                height={40}
                alt=''
              />
              <Image
                className='mx-2'
                src={logoJS}
                width={40}
                height={40}
                alt=''
              />
            </div>
            <div className='flex flex-row mb-2 md:my-5'>
              <Image
                className='mx-2'
                src={logoReact}
                width={40}
                height={40}
                alt=''
              />
              <Image
                className='mx-2'
                src={logoPython}
                width={40}
                height={40}
                alt=''
              />
              <Image
                className='mx-2'
                src={logoC}
                width={40}
                height={40}
                alt=''
              />
            </div>
          </div>
        </div>
        <br />

        <div className='sm:w-[200px] lg:w-[400px] text-start md:p-0 ml-[20px] p-6 md:ml-[60px]'>
          Hey there, I'm Akhilesh M T, a self-taught web developer and IoT
          enthusiast! I'm totally geeking out over technology all the time. Web
          development and IoT are my jam, and I'm super stoked about working in
          these fields. It's such a thrill to dive into the nitty-gritty of
          different technologies fueled by my curiosity. I take serious pride in
          what I do, and my big dream is to rock it and be successful by doing
          what I absolutely love! 🚀
        </div>
        <Link className='mt-5' href={pdfLink} target='_blank'>
          <Button
            className='font-michroma text-sm'
            color='primary'
            variant='bordered'
          >
            resume
          </Button>
        </Link>
      </div>
    </>
  );
};

export default AboutMe;
