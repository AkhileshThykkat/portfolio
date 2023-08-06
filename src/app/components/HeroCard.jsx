import React from 'react';
import Linkedin from '../assets/LinkedIn.svg';
import Github from '../assets/Github.svg';
import Me from '../assets/me.jpg';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  CardFooter,
  Avatar,
} from '@nextui-org/react';
import Link from 'next/link';
import Image from 'next/image';
export default function HeroCard() {
  const linkedInUrl = 'https://www.linkedin.com/in/akhilesh-m-t-a68b09220/';
  const githubUrl = 'https://github.com/AkhileshThykkat/';
  return (
    <Card
      id='home'
      className='sm:w-[70%] md:max-[700px] md:w-[700px]  rounded-[45px] lg:max-w-[700px] lg:w-[700px] lg:max-h-[450px] lg:h-[400px] bg-black text-white mx-auto mt-[45px] relative '
    >
      <div className='ml-3'>
        <CardHeader className='flex gap-3 mt-5'>
          <div className='flex flex-col'>
            <p className='text-xl mt-[24px] mx-[2rem] font-michroma'>
              Hey I'm Akhilesh
            </p>
            <p className='text-xl mx-[2rem] font-michroma'>
              Web Developer and IoT enthusiast
            </p>
          </div>
        </CardHeader>

        <CardBody className='ml-[0.7rem] w-[100%] flex flex-row justify-between mt-6'>
          <div className='flex flex-col ml-2'>
            <p className='font-inter text-base text-gray-500'>
              An aspiring web and IoT engineer from India
            </p>
            <div className='flex flex-row mt-5'>
              <Link href={linkedInUrl}>
                <Image
                  className='mt-3 text-black bg-blue-400 rounded-md hover:cursor-pointer mx-5'
                  src={Linkedin}
                  width={30}
                  height={30}
                />
              </Link>
              <Link href={githubUrl}>
                <Image
                  className='mt-3 text-black bg-blue-400 rounded-md hover:cursor-pointer mx-5'
                  src={Github}
                  width={30}
                  height={30}
                />
              </Link>
            </div>
          </div>
          <Image
            src={Me}
            width={150}
            height={150}
            alt=''
            className='w-[150px] h-[150px] text-xl mr-[22px] mt-[-24px] rounded-[50%]'
          />
        </CardBody>
      </div>
      <CardFooter className='flex flex-col justify-end items-center '>
        <Button
          className='font-michroma text-sm'
          color='primary'
          variant='bordered'
        >
          <Link showAnchorIcon href='#about'>
            read more
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
