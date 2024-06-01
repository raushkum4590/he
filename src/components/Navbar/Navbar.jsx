import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/air.jpg';
import Language from "@mui/icons-material/Language"; 

const Navbar = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 px-4 md:px-16 w-full h-20 border-b-[1px] items-center'>
      <div className='flex justify-center md:justify-start'>
        <img src={logo} alt="" className="h-16 w-28" />
      </div>
      <div className="hidden md:flex justify-evenly items-center border rounded-full shadow-md h-12 w-full md:w-96 mx-auto">
        <button className='border-r-2 text-sm font-medium px-4'>Anywhere</button>
        <button className='border-r-2 text-sm font-medium px-4'>Any Week</button>
        <button className='text-sm font-medium text-gray-500 px-4'>Add guests</button>
        <div className="bg-red-500 text-white rounded-full p-2">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </div>
      </div>
      <div className="flex justify-between md:justify-end items-center gap-4 md:gap-8 mt-2 md:mt-0">
        <button className='text-sm font-medium'>Airbnb your home</button>
        <Language />
        <div className='flex justify-evenly items-center gap-2 rounded-full border shadow-md h-10 w-20 py-1.25 pr-1.25 pl-3'>
          <FontAwesomeIcon icon={faBars} />
          <button className='bg-black text-white rounded-full text-center w-7 h-7 text-[10px] font-semibold'>E</button>
        </div>
      </div>
      <div className="flex md:hidden justify-center items-center w-full mt-2">
        <div className="flex justify-evenly items-center border rounded-full shadow-md h-12 w-full mx-4">
          <button className='border-r-2 text-sm font-medium px-4'>Anywhere</button>
          <button className='border-r-2 text-sm font-medium px-4'>Any Week</button>
          <button className='text-sm font-medium text-gray-500 px-4'>Add guests</button>
          <div className="bg-red-500 text-white rounded-full p-2">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
