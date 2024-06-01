import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWaterLadder, faDumbbell, faUmbrellaBeach, faMugSaucer, faTree } from '@fortawesome/free-solid-svg-icons';

import HomeIcon from '@mui/icons-material/Home';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SyncAltIcon from '@mui/icons-material/SyncAlt';

const Category = () => {
  return (
    <div className='flex flex-wrap items-center h-24 space-x-4 sm:space-x-8'>
      <div className='flex flex-col items-center gap-2 w-1/2 sm:w-auto pl-4 sm:pl-16'>
        <FontAwesomeIcon icon={faWaterLadder} />
        <p className='text-xs font-normal text-gray-400 hover:text-black'>Amazing pools</p>
      </div>
      <div className='flex flex-col items-center gap-2 w-1/2 sm:w-auto pl-4 sm:pl-16'>
        <FontAwesomeIcon icon={faUmbrellaBeach} />
        <p className='text-xs font-normal text-gray-400 hover:text-black'>Beachside</p>
      </div>
      <div className='flex flex-col items-center gap-2 w-1/2 sm:w-auto pl-4 sm:pl-16'>
        <HomeIcon />
        <p className='text-xs font-normal text-gray-400 hover:text-black'>Homes</p>
      </div>
      <div className='flex flex-col items-center gap-2 w-1/2 sm:w-auto pl-4 sm:pl-16'>
        <FontAwesomeIcon icon={faDumbbell} />
        <p className='text-xs font-normal text-gray-400 hover:text-black'>Gyms</p>
      </div>
      <div className='flex flex-col items-center gap-2 w-1/2 sm:w-auto pl-4 sm:pl-16'>
        <FontAwesomeIcon icon={faMugSaucer} />
        <p className='text-xs font-normal text-gray-400 hover:text-black'>Cafes</p>
      </div>
      <div className='flex flex-col items-center gap-2 w-1/2 sm:w-auto pl-4 sm:pl-16'>
        <FontAwesomeIcon icon={faUmbrellaBeach} />
        <p className='text-xs font-normal text-gray-400 hover:text-black'>Beaches</p>
      </div>
      <div className='flex flex-col items-center gap-2 w-1/2 sm:w-auto pl-4 sm:pl-16'>
        <FontAwesomeIcon icon={faMugSaucer} />
        <p className='text-xs font-normal text-gray-400 hover:text-black'>Cafes</p>
      </div>
      <div className='flex flex-col items-center gap-2 w-1/2 sm:w-auto pl-4 sm:pl-16'>
        <FontAwesomeIcon icon={faTree} />
        <p className='text-xs font-normal text-gray-400 hover:text-black'>Parks</p>
      </div>
      <div className='flex items-center w-full sm:w-auto justify-end sm:justify-start pl-4 sm:pl-16 mt-4 sm:mt-0'>
        <ArrowCircleRightIcon className='ml-auto sm:ml-4' />
      </div>
      <div className='flex items-center justify-center rounded-xl shadow-md h-12 w-full sm:w-auto border p-2 sm:p-4 mt-4 sm:mt-0'>
        <SyncAltIcon />
        <p className='text-xs font-medium pl-2 sm:pl-4 pr-2'>Filter</p>
      </div>
    </div>
  );
};

export default Category;
