import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/air.jpg';
import Language from "@mui/icons-material/Language"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='relative w-full h-20 border-b-[1px]'>
      <div className='grid grid-cols-2 md:grid-cols-3 px-4 md:px-16 w-full h-full items-center'>
        {/* Logo Section */}
        <div className='flex justify-center md:justify-start'>
          <img src={logo} alt="logo" className="h-16 w-28" />
        </div>

        {/* Hamburger Icon */}
        <div className="flex justify-end md:hidden">
          <button onClick={toggleMenu} className="text-xl">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </button>
        </div>

        {/* Search Section for Medium and Larger Screens */}
        <div className="hidden md:flex justify-evenly items-center border rounded-full shadow-md h-12 w-full md:w-96 mx-auto">
          <button className='border-r-2 text-sm font-medium px-4'>Anywhere</button>
          <button className='border-r-2 text-sm font-medium px-4'>Any Week</button>
          <button className='text-sm font-medium text-gray-500 px-4'>Add guests</button>
          <div className="bg-red-500 text-white rounded-full p-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden md:flex justify-between md:justify-end items-center gap-4 md:gap-8 mt-2 md:mt-0">
          <button className='text-sm font-medium'>Airbnb your home</button>
          <Language />
          <div className='flex justify-evenly items-center gap-2 rounded-full border shadow-md h-10 w-20 py-1.25 pr-1.25 pl-3'>
            <FontAwesomeIcon icon={faBars} />
            <button className='bg-black text-white rounded-full text-center w-7 h-7 text-[10px] font-semibold'>E</button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md z-10">
          <div className="flex flex-col items-center py-4 space-y-4">
            <div className="flex justify-evenly items-center border rounded-full shadow-md h-12 w-11/12 mx-auto">
              <button className='border-r-2 text-sm font-medium px-4'>Anywhere</button>
              <button className='border-r-2 text-sm font-medium px-4'>Any Week</button>
              <button className='text-sm font-medium text-gray-500 px-4'>Add guests</button>
              <div className="bg-red-500 text-white rounded-full p-2">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </div>
            </div>
            <button className='text-sm font-medium'>Airbnb your home</button>
            <div className='flex justify-evenly items-center gap-2 rounded-full border shadow-md h-10 w-28 py-1.25 pr-1.25 pl-3'>
              <Language />
              <button className='bg-black text-white rounded-full text-center w-7 h-7 text-[10px] font-semibold'>E</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
