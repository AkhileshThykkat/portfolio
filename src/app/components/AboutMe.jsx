import React from 'react';
import Image from 'next/image';
import logoHtml from '../assets/html.svg';
import logoCss from '../assets/css.svg';
import logoJS from '../assets/javascript.svg';
import logoReact from '../assets/react.svg';
import logoPython from '../assets/python.svg';
import logoC from '../assets/C.svg';
const AboutMe = () => {
  return (
    <>
      <h1 id='about' className='font-michroma text-xl text-center mt-7'>
        About Me
      </h1>
      <div className='sm:w-[300px] lg:w-[800px] lg:h-[300px] mx-auto  text-white flex sm:flex-row flex-col flex-wrap justify-around items-center'>
        <div className='flex flex-col items-center'>
          <h2 className='font-michroma my-4 text-base text-gray-400'>
            Technologies I use
          </h2>
          <div className='flex flex-row mx-7'>
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
            <Image className='mx-2' src={logoC} width={40} height={40} alt='' />
          </div>
        </div>
        <br />

        <div className='w-[400px]'>
          Hey there, I'm Akhilesh M T, a self-taught web developer and IoT
          enthusiast! I'm totally geeking out over technology all the time. Web
          development and IoT are my jam, and I'm super stoked about working in
          these fields. It's such a thrill to dive into the nitty-gritty of
          different technologies fueled by my curiosity. I take serious pride in
          what I do, and my big dream is to rock it and be successful by doing
          what I absolutely love! 🚀
        </div>
      </div>
    </>
  );
};

export default AboutMe;
