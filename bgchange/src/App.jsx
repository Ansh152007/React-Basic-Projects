import { useState } from 'react'
import './App.css'


function App() {

  const [color, setcolor] = useState('bg-amber-400')

  return (
    <>
    <div className={`h-screen w-full relative flex flex-col justify-end items-center ${color}`}>
      <div className='flex justify-center gap-4 pb-10'> 
        <button className='bg-red-800 text-white px-4 py-2 rounded-2xl cursor-pointer border-2' onClick={() => setcolor('bg-red-800')}>
          Red 
        </button>
        <button className='bg-blue-800 text-white px-4 py-2 rounded-2xl cursor-pointer border-2' onClick={()=> setcolor('bg-blue-800')}>
          Blue
        </button>
        <button className='bg-green-800 text-white px-4 py-2 rounded-2xl cursor-pointer border-2' onClick={()=> setcolor('bg-green-800')}>
          Green
        </button>
      </div>
      </div>
    </>
  )
}

export default App
