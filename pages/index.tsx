import { NextPage } from 'next';
import Hero from '@components/sections/Hero';
import Navbar from '@components/sections/Navbar';
import About from '@components/sections/About';
import useCalculateScreenHeight from '@utils/useCalculateScreenHeight';
import { Element } from 'react-scroll';
import Hobby from '../src/components/sections/Hobby';
import Contact from '../src/components/sections/Contact';
import Projects from '../src/components/sections/Projects';
import Skills from '../src/components/sections/Skills';

const Home: NextPage = () => {
  useCalculateScreenHeight();

  return (
    <div>
      <Navbar />
      <div className="px-6 sm:px-8 w-full md:px-10 max-w-screen-lg relative mx-auto">
        {/* <div className="px-6 sm:px-8 md:px-10 lg:px-20 xl:px-20 relative max-w-screen-lg mx-auto"> */}
        <Element name="home">
          <Hero />
        </Element>
        <Element name="about">
          <About />
          <Hobby />
        </Element>
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="projects">
          <Projects />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
      </div>
    </div>
  );
};

export default Home;
