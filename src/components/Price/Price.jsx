
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
const Price = () => {
  return (
    <div className="flex justify-center">

    <div className="flex justify-between rounded-xl items-center  border  w-{600px} h-12 p-4">
      <div className="flex justify-start p-5 ">
        <p className="border-r-2 border-gray-100 pr-4 text-base font-medium"> Display total price</p>
        <p> Include all fees,before taxes</p>
        <div className='justify-end space-between pl-16'>
        <FontAwesomeIcon icon={ faToggleOff} /> 
        </div>



      </div>
      </div></div>
  )
}

export default Price