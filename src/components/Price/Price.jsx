import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';

const Price = () => {
  return (
    <div className="flex justify-center w-full p-4">
      <div className="flex flex-col md:flex-row justify-between rounded-xl items-center border w-full max-w-md md:max-w-2xl h-auto md:h-12 p-4">
        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-start md:p-5 w-full md:w-auto">
          <p className="md:border-r-2 border-gray-100 md:pr-4 text-base font-medium">Display total price</p>
          <p className="text-sm md:text-base md:pl-4">Include all fees, before taxes</p>
        </div>
        <div className="flex justify-end w-full md:w-auto mt-4 md:mt-0">
          <FontAwesomeIcon icon={faToggleOff} />
        </div>
      </div>
    </div>
  );
}

export default Price;
