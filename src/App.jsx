
import { useState } from 'react';
import './App.css'
import Courses from './assets/Courses/Courses'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [carts, setCarts] = useState([]);
  const [credit, setCredit] = useState(0);
  let [totalPrice, setTotalPrice] = useState(0);

  const handleCarts = (item) => {

    const isExist = carts.find(e => item === e);

    if(isExist) {
      notify(true);
      return;
    }
    if((credit + item.credit_hours) > 20) {
      return notify(false);
    }

    setTotalPrice(totalPrice + item.price);
    setCredit(credit + item.credit_hours);
    setCarts([...carts, item]);
  }

  const notify = (existingNotification) => {
    if(existingNotification) {
      return toast('This course is already taken!!');
    }
    return toast("Your credit limit is over!!");
  }

  return (
    <>
      <div className='bg-slate-100 pb-52'>
        <header className='max-w-6xl mx-auto'>
          <h1 className='text-4xl text-center py-10 font-semibold'>Course Registration</h1>
        </header>

        <main className='max-w-7xl mx-auto lg:px-0 px-3'>
          <div className='flex md:flex-row flex-col gap-5'>
            <div className='lg:w-[75%] md:w-[75%]'>
              <Courses handleCarts={handleCarts}></Courses>
              <ToastContainer></ToastContainer>
            </div>

            <div className='lg:w-[25%] md:w-[25%]]'>
              <div className='card bg-white py-5 px-5'>
                <h1 className='font-semibold text-lg text-center w-full text-blue-500 border-b-2 pb-4'>Credit Hour Remaining {(20 - credit)} hr</h1>

                <div>
                  <h1 className='pt-4 pb-5 font-semibold text-lg'>Course Name</h1>

                  <div>
                    <ol className='list-decimal pl-5 space-y-2 pb-5 border-b-2'>
                      {
                        carts.map(item => <li key={item.id}>{item.title}</li>)
                      }
                    </ol>

                    <h1 className='py-5 border-b-2 text-lg font-medium'>Total Credit Hour: {credit}</h1>
                    
                    <h1 className='text-lg font-medium pt-5'>Total Price : {totalPrice} USD</h1>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
        
      </div>
    </>
  )
}

export default App
