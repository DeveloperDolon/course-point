
import { useState } from 'react';
import './App.css'
import Courses from './assets/Courses/Courses'

function App() {
  const [carts, setCarts] = useState([]);
  const [credit, setCredit] = useState(0);

  const handleCarts = (item) => {

    const isExist = carts.find(e => item === e);

    if(isExist) {
      const toastContent = document.querySelector("#toast-content");
      toastContent.classList.remove("hidden");

      setTimeout(() => {
        toastContent.classList.add("hidden");
      }, 2000);
      return;
    }
    if((credit + item.credit_hours) > 20) {
      const creditToast = document.querySelector("#credit-toast");
      
      creditToast.classList.remove("hidden");
      setTimeout(() => {
        creditToast.classList.add("hidden");
      }, 2000);
      return;
    }
    setCredit(credit + item.credit_hours);
    setCarts([...carts, item]);
  }

  return (
    <>
      <div className='bg-slate-100 pb-52'>
        <header className='max-w-6xl mx-auto'>
          <h1 className='text-4xl text-center py-10 font-semibold'>Course Registration</h1>
        </header>

        <main className='max-w-7xl mx-auto'>
          <div className='flex gap-5'>
            <div className='w-[75%]'>
              <Courses handleCarts={handleCarts}></Courses>
            </div>

            <div className='w-[25%]'>
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

                    <h1 className='text-center py-5 border-b-2 text-lg font-medium'>Total Credit Hour: {credit}</h1>
                  </div>
                </div>
              </div>


              <div id='toast-content' className='hidden'>
                <div className="toast toast-end">
                  <div className="alert alert-error text-white">
                    <span>Sorry your item is already taken!!</span>
                  </div>
                </div>
              </div>

              <div id='credit-toast' className='hidden'>
                <div className="toast toast-end">
                  <div className="alert alert-warning text-white">
                    <span>Sorry your credit limit is over!! Can&apos;t take more</span>
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
