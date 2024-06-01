import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faWaterLadder, faDumbbell, faUmbrellaBeach,faMugSaucer,faTree } from '@fortawesome/free-solid-svg-icons';

import HomeIcon from '@mui/icons-material/Home';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SyncAltIcon from '@mui/icons-material/SyncAlt';



const Cateogry = () => {
  return (
    <div className='flex items-center h-24 space-x-8'>
        <div className='flex flex-col items-center gap-2 pl-16 '>
        <FontAwesomeIcon icon={faWaterLadder} /> 

        <p className='text-xs font-normal  text-gray-400 hover:text-black '>Amazing pools</p>
        </div>
       
        <div className='flex flex-col items-center gap-2 pl-16 '>
          
        <FontAwesomeIcon icon={ faUmbrellaBeach } /> 
        
        <p className='text-xs font-normal  text-gray-400 hover:text-black '>Amazing pools</p>

        </div>
        <div className='flex flex-col items-center gap-2 pl-16 '>
        <HomeIcon />
        <p className='text-xs font-normal  text-gray-400 hover:text-black '>Amazing pools</p>
        </div>
        <div className='flex flex-col items-center gap-2 pl-16 '>
        <FontAwesomeIcon icon={ faDumbbell } /> 
        <p className='text-xs font-normal  text-gray-400 hover:text-black '>Amazing pools</p>
        </div>
        <div className='flex flex-col items-center gap-2 pl-16 '>
        <FontAwesomeIcon icon={ faMugSaucer } /> 
       
        <p className='text-xs font-normal  text-gray-400 hover:text-black '>Amazing pools</p>
        </div>
        <div className='flex flex-col items-center gap-2 pl-16 '>
      
        <FontAwesomeIcon icon={ faUmbrellaBeach } /> 
        <p className='text-xs font-normal  text-gray-400 hover:text-black '>Amazing pools</p>
        </div>
       
        <div className='flex flex-col items-center gap-2 pl-16 '>
        
        <FontAwesomeIcon icon={faMugSaucer} /> 
       
        <p className='text-xs font-normal  text-gray-400 hover:text-black '>Amazing pools</p>
        </div>
        <div className='flex flex-col items-center gap-2 pl-16 '>
        
        <FontAwesomeIcon icon={faTree } /> 
        <p className='text-xs font-normal  text-gray-400 hover:text-black '>Amazing pools</p>
        </div>
       
       
       
        <ArrowCircleRightIcon />
       <div className='Flex justify-around items-center rounded-xl shadow-md h-12 w-23 border'>
       <SyncAltIcon />
        <p className='text-xs font-medium pl-4 pr-2'>Filter</p>
       </div>
        </div>
  )
}

export default Cateogry