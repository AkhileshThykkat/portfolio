import React from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from '@nextui-org/react';

const NavBar = () => {
  return (
    <Navbar className=' bg-slate-950 opacity-40 font-michroma'>
      <NavbarBrand>
        <p className='font-bold  text-3xl text-white'>AK.dev</p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link color='white' href='#h'>
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='white' href='#projects'>
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='white' href='#about'>
            About me
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='white' href='#contactMe'>
            Contact
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
