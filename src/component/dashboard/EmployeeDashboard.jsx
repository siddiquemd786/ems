import React from 'react'
import Header from '../others/Header'
import Tasklistnumbers from '../others/Tasklistnumbers'
import Tasklist from '../tasklist/Tasklist'

export const EmployeeDashboard = () => {
  return (
    <div className='p-20 bg-[#1c1c1c] h-screen w-screen '>
<Header/>
<Tasklistnumbers/>

<Tasklist/>

    </div>

  )
}
