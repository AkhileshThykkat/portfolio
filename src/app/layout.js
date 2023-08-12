// 'use client';

import './globals.css';
import { inter } from './fonts';
import { michroma } from './fonts';
import { Providers } from './providers';
export const metaData = {
  title: 'Akhilesh Thykkat Portfolio',
  description:
    'Welcome to my portfolio website showcasing my work and projects.',
  author: 'Akhilesh Thykkat',
  icon: './favicon.ico', // Path to a default thumbnail image
  url: 'https://thykkat-portfolio.vercel.app/',
  social: {
    linkedin: 'https://www.linkedin.com/in/akhilesh-m-t-a68b09220/',
    github: 'https://github.com/AkhileshThykkat/',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${michroma.variable}`}>
      <title>Akhilesh Portfolio</title>
    
      <body>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
