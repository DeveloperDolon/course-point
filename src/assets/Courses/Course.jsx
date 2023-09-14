import PropTypes from 'prop-types';

export default function Course({item}) {
  return (
    
        <div className="card bg-base-100 shadow-xl flex justify-between flex-col p-4">
            <div>
                <figure className="">
                    <img src={item.image_link} alt="Shoes" className="rounded-xl" />
                </figure>

                <div className="card text-center mt-3">
                    <div>
                        <h2 className="card-title text-center">{item.title}</h2>
                        <p className='text-sm text-left mt-3'>{item.details}</p>
                    </div>
                </div>
            </div>

            <div className="card-actions mt-5">
                <button className="bg-[#2F80ED] w-full rounded-lg text-white font-semibold p-2">Select</button>
            </div>
        </div>
    
  )
}

Course.propTypes = {
    item: PropTypes.object,

}
