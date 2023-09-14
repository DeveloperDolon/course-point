import PropTypes from 'prop-types';
import { FiDollarSign } from 'react-icons/fi';
import { BiBookOpen } from 'react-icons/bi';

export default function Course({item, handleCarts}) {
  return (
    
        <div className="card bg-base-100 shadow-xl flex justify-between flex-col p-4">
            <div>
                <figure className="">
                    <img src={item.image_link} alt="Shoes" className="rounded-xl" />
                </figure>

                <div className="card mt-3 items-left">
                    <h2 className="card-title text-left">{item.title}</h2>
                    <p className='text-sm text-left mt-3'>{item.details}</p>
                </div>
            </div>

            <div className="card-actions">

                <div className='w-full flex justify-between gap-5 text-[15px] my-3'>
                    <p className='flex items-center'><FiDollarSign className='w-5 h-5 mr-2'></FiDollarSign> Price: {item.price}</p>
                    <p className='flex items-center'><BiBookOpen className='w-5 h-5 mr-2'></BiBookOpen> Credit: {item.credit_hours} hrs</p>
                </div>

                <button onClick={() => handleCarts(item)} className="bg-[#2F80ED] w-full rounded-lg text-white font-semibold p-2">Select</button>
            </div>
        </div>
    
  )
}

Course.propTypes = {
    item: PropTypes.object,
    handleCarts: PropTypes.func

}
