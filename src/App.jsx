
import './App.css'
import Courses from './assets/Courses/Courses'

function App() {


  return (
    <>
      <div className='bg-slate-100 pb-52'>
        <header className='max-w-6xl mx-auto'>
          <h1 className='text-4xl text-center py-10 font-semibold'>Course Registration</h1>
        </header>

        <main className='max-w-7xl mx-auto'>
          <div className='flex justify-between'>
            <div className='w-[75%]'>
              <Courses></Courses>
            </div>

            <div className='w-[20%]'>

            </div>
          </div>
        </main>
        
      </div>
    </>
  )
}

export default App
