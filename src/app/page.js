'use client';

import HeroCard from './components/HeroCard';
import NavBar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
export default function App() {
  return (
    <>
      <div className='overflow-hidden'>
        <NavBar />
        <HeroCard />
        <Projects />
        <AboutMe />
        <Contact />
      </div>
    </>
  );
}
