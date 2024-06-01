import image from '../../assets/b.jpg';
import images from '../../assets/ca.avif';
import image1 from '../../assets/da.avif';
import image2 from '../../assets/ea.avif';
import image3 from '../../assets/fa.avif';
import image4 from '../../assets/ga.avif';
import image5 from '../../assets/ha.avif';
import image6 from '../../assets/ja.avif';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar} from '@fortawesome/free-solid-svg-icons';
const Hotel = () => {
  return ( 
    <div className='mt-14 mx-10 pl-10 '>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div className='flex flex-col h-96 w-72'>
      <img src={image} alt="" className="w-72 h-64 rounded-xl  hover:scale-110"/>
      <div className='flex'>
        <p className='text-sm font-medium'>Lonvia India</p>
        <div className='flex pl-20'>
        <FontAwesomeIcon icon={ faStar } />
        </div>
        <p className='text-sm font-light'>5.0</p> 

      </div>
      <p className='text-sm text-gray-400'>62 Kilometer away</p>
      <p className='text-sm text-gray-400'>30 July-4 Aug</p>
      <p className='text-sm font-medium mt-2'>$49.99 night</p>


      </div>


      <div className='flex flex-col h-96 w-72'>
      <img src={images} alt="" className="w-72 h-64 rounded-xl  hover:scale-110 duration-500 transition-transform"/>
      <div className='flex'>
        <p className='text-sm font-medium'>Lonvia India</p>
        <div className='flex pl-20'>
        <FontAwesomeIcon icon={ faStar } />
        </div>
        <p className='text-sm font-light'>5.0</p> 

      </div>
      <p className='text-sm text-gray-400'>62 Kilometer away</p>
      <p className='text-sm text-gray-400'>30 July-4 Aug</p>
      <p className='text-sm font-medium mt-2'>$49.99 night</p>


      </div>
      <div className='flex flex-col h-96 w-72'>
      <img src={image1} alt="" className="w-72 h-64 rounded-xl  hover:scale-110 duration-500 transition-transform"/>
      <div className='flex'>
        <p className='text-sm font-medium'>Lonvia India</p>
        <div className='flex pl-20'>
        <FontAwesomeIcon icon={ faStar } />
        </div>
        <p className='text-sm font-light'>5.0</p> 

      </div>
      <p className='text-sm text-gray-400'>62 Kilometer away</p>
      <p className='text-sm text-gray-400'>30 July-4 Aug</p>
      <p className='text-sm font-medium mt-2'>$49.99 night</p>


      </div>
      <div className='flex flex-col h-96 w-72'>
      <img src={image2} alt="" className="w-72 h-64 rounded-xl  hover:scale-110 duration-500 transition-transform"/>
      <div className='flex'>
        <p className='text-sm font-medium'>Lonvia India</p>
        <div className='flex pl-20'>
        <FontAwesomeIcon icon={ faStar } />
        </div>
        <p className='text-sm font-light'>5.0</p> 

      </div>
      <p className='text-sm text-gray-400'>62 Kilometer away</p>
      <p className='text-sm text-gray-400'>30 July-4 Aug</p>
      <p className='text-sm font-medium mt-2'>$49.99 night</p>


      </div>
      <div className='flex flex-col h-96 w-72'>
      <img src={image3} alt="" className="w-72 h-64 rounded-xl  hover:scale-110 duration-500 transition-transform"/>
      <div className='flex'>
        <p className='text-sm font-medium'>Lonvia India</p>
        <div className='flex pl-20'>
        <FontAwesomeIcon icon={ faStar } />
        </div>
        <p className='text-sm font-light'>5.0</p> 

      </div>
      <p className='text-sm text-gray-400'>62 Kilometer away</p>
      <p className='text-sm text-gray-400'>30 July-4 Aug</p>
      <p className='text-sm font-medium mt-2'>$49.99 night</p>


      </div>
      <div className='flex flex-col h-96 w-72'>
      <img src={image4} alt="" className="w-72 h-64 rounded-xl hover:scale-110 duration-500 transition-transform"/>
      <div className='flex'>
        <p className='text-sm font-medium'>Lonvia India</p>
        <div className='flex pl-20'>
        <FontAwesomeIcon icon={ faStar } />
        </div>
        <p className='text-sm font-light'>5.0</p> 

      </div>
      <p className='text-sm text-gray-400'>62 Kilometer away</p>
      <p className='text-sm text-gray-400'>30 July-4 Aug</p>
      <p className='text-sm font-medium mt-2'>$49.99 night</p>


      </div>
      <div className='flex flex-col h-96 w-72'>
      <img src={image5} alt="" className="w-72 h-64 rounded-xl hover:scale-110 duration-500 transition-transform"/>
      <div className='flex'>
        <p className='text-sm font-medium'>Lonvia India</p>
        <div className='flex pl-20'>
        <FontAwesomeIcon icon={ faStar } />
        </div>
        <p className='text-sm font-light'>5.0</p> 

      </div>
      <p className='text-sm text-gray-400'>62 Kilometer away</p>
      <p className='text-sm text-gray-400'>30 July-4 Aug</p>
      <p className='text-sm font-medium mt-2'>$49.99 night</p>


      </div>
      <div className='flex flex-col h-96 w-72'>
      <img src={image6} alt="" className="w-72 h-64 rounded-xl  hover:scale-110 duration-500 transition-transform"/>
      <div className='flex'>
        <p className='text-sm font-medium'>Lonvia India</p>
        <div className='flex pl-20'>
        <FontAwesomeIcon icon={ faStar } />
        </div>
        <p className='text-sm font-light'>5.0</p> 

      </div>
      <p className='text-sm text-gray-400'>62 Kilometer away</p>
      <p className='text-sm text-gray-400'>30 July-4 Aug</p>
      <p className='text-sm font-medium mt-2'>$49.99 night</p>


      </div>

      
    </div>
    </div>
  )
}

export default Hotel