import React from 'react'

const CreatedTask = () => {
  return (
    <div className=' bg-[#1c1c1c] p-5  mt-7 rounded '>
    <form className='flex flex-wrap w-full   items-start justify-between'>

    

      <div className='w-1/2'>
      <div>
      <h3  className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
      <input className='text-sm py-1 px-2 w-4/5  rounded outline-none bg-transparent border-[1px]  border-gray-400 mb-4' type="text" placeholder='Make your UI Design' />
      </div>

      <div>
        <h3  className='text-sm  text-gray-300 mb-0.5'>Date</h3>
      <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
      </div>
      <div>
      <h3  className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
      <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
      </div>

      <div>
      <h3>Catagory</h3>
      <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder=' design,dev,etc' />
      </div>
      </div>

<div className='w-2/5 flex flex-col items-start'>

<h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
<textarea className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px]  border-gray-400' ></textarea>
<button className='bg-emerald-400 py-3 hover:bg-emerald-500 px-5 rounded font-semibold text-sm mt-4 w-full
0'>Created Task</button>

</div>




      
      

    </form>
   </div>
  )
}

export default CreatedTask