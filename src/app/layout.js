'use client';
import './globals.css';
import { inter } from './fonts';
import { michroma } from './fonts';
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={`${inter.variable} ${michroma.variable}`}>
      <body>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
