import React from 'react';
import Me from '../assets/me.jpg';
import Image from 'next/image';
const ContactCard = () => {
  const contactData = {
    name: 'Akhilesh Thykkat',
    instagram: 'https://www.instagram.com/akhileshthykkat/',
    github: 'https://github.com/AkhileshThykkat/',
    linkedin: 'https://www.linkedin.com/in/akhilesh-m-t-a68b09220/',
    email: 'akhileshthykkat843@gmail.com',
  };

  return (
    <>
      <h1
        id='contactMe'
        className='font-michroma text-xl text-white text-center mt-[80px]'
      >
        Contact
      </h1>
      <div className='sm:w-[300px] sm:h-[300px] bg-black shadow-md rounded-lg p-6 mx-auto lg:w-[600px] lg:h-[200px] my-[50px]'>
        <Image
          src={Me}
          alt={`Profile of ${contactData.name}`}
          className='w-16 h-16 rounded-full mx-auto mb-4'
          width={150}
          height={150}
        />
        <h2 className='text-2xl font-semibold text-center mb-2'>
          {contactData.name}
        </h2>
        <div className='flex justify-center space-x-4 mb-4'>
          <a
            href={contactData.instagram}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-500 hover:text-blue-600'
          >
            Instagram
          </a>
          <a
            href={contactData.github}
            target='_blank'
            rel='noopener noreferrer'
            className='text-gray-700 hover:text-gray-800'
          >
            GitHub
          </a>
          <a
            href={contactData.linkedin}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-800 hover:text-blue-900'
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${contactData.email}`}
            className='text-green-500 hover:text-green-600'
          >
            Email
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
