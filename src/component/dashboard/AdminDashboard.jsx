import React from 'react'
import Header from '../others/Header'
import CreatedTask from '../others/CreatedTask'
import Alltask from '../others/Alltask'

const AdminDashboard = () => {
  return (
    <div className='h-screen  w-full p-10'>
   <Header/>
   <CreatedTask/>
   <Alltask/>

    </div>
  )
}

export default AdminDashboard