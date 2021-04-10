import { FC, useState } from 'react';
import { Link } from 'react-scroll';
import useEventListener from '@utils/useEventListener';

const Navbar: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [isVisible, setVisible] = useState(false);

  useEventListener(
    'scroll',
    () => {
      const shouldAppear = window.scrollY > 0;
      setVisible(shouldAppear);
    },
    {
      passive: true,
      capture: false,
    },
  );

  // if (!isVisible) {
  //   return null;
  // }

  return (
    <>
      <nav
        className={`fixed z-10 top-0 left-0 bg-gray w-full py-2 md:py-4 transition-opacity ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="px-6 sm:px-8 w-full md:px-10 w-full max-w-screen-lg mx-auto flex items-center justify-between">
          <Link
            className="font-bold"
            to="home"
            spy
            smooth
            offset={0}
            duration={500}
          >
            Magdalena <span className="text-yellow">Hecht</span>
          </Link>
          <button
            className="flex sm:hidden items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setOpen(!isOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <div className="hidden sm:block">
            <Link
              activeClass="text-yellow"
              className="cursor-pointer transition-colors duration-300 ml-6"
              to="home"
              spy
              smooth
              offset={0}
              duration={500}
            >
              Home
            </Link>
            <Link
              activeClass="text-yellow"
              className="cursor-pointer transition-colors duration-300 ml-6"
              to="about"
              spy
              smooth
              offset={-50}
              duration={500}
            >
              About
            </Link>
            <Link
              activeClass="text-yellow"
              className="cursor-pointer transition-colors duration-300 ml-6"
              to="skills"
              spy
              smooth
              offset={-50}
              duration={500}
            >
              Skills
            </Link>
            <Link
              activeClass="text-yellow"
              className="cursor-pointer transition-colors duration-300 ml-6"
              to="projects"
              spy
              smooth
              offset={-50}
              duration={500}
            >
              Projects
            </Link>
            <Link
              activeClass="text-yellow"
              className="cursor-pointer transition-colors duration-300 ml-6"
              to="contact"
              spy
              smooth
              offset={-50}
              duration={500}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      <div
        className="sm:hidden bg-gray py-1.5 px-3 w-screen z-50 h-screen flex fixed text-center top-0 flex-col transition-all duration-300 ease-in-out"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-100%)' }}
      >
        <button
          className="flex ml-auto md:hidden items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setOpen(!isOpen)}
        >
          <span className="sr-only">Close main menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Link
          activeClass="text-yellow"
          className="py-3"
          to="home"
          spy
          smooth
          offset={50}
          duration={500}
        >
          <span onClick={() => setOpen(false)}>Home</span>
        </Link>
        <Link
          activeClass="text-yellow"
          className="py-3"
          to="about"
          spy
          smooth
          offset={50}
          duration={500}
        >
          <span onClick={() => setOpen(false)}>About</span>
        </Link>
        <Link
          activeClass="text-yellow"
          className="py-3"
          to="skills"
          spy
          smooth
          offset={50}
          duration={500}
        >
          <span onClick={() => setOpen(false)}>Skills</span>
        </Link>

        <Link
          activeClass="text-yellow"
          className="py-3"
          to="projects"
          spy
          smooth
          offset={50}
          duration={500}
        >
          <span onClick={() => setOpen(false)}>Projects</span>
        </Link>
        <Link
          activeClass="text-yellow"
          className="py-3"
          to="contact"
          spy
          smooth
          offset={50}
          duration={500}
        >
          <span onClick={() => setOpen(false)}>Contact</span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
