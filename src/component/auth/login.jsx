import React, { useState } from 'react'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


const submitHandaler=(e)=>{

    e.preventDefault();
    console.log ("this the email",email )
    console.log ("this the Password",password )
    console.log(e)

}


  return (
    <div className='flex justify-center h-screen w-screen items-center'>

        <div className='flex justify-center items-center border-2 border-red-700 p-20 rounded-md'>

            <form onSubmit={(e)=>{
                submitHandaler(e)

            }} className='flex flex-col justify-center items-center'>

             <input value={email} onChange={(e)=>{
                setEmail(e.target.value)

             }} className='border-2 border-emerald-600 px-5 py-3 text-black rounded-lg' type="email" placeholder='Enter Your Email' />

             <input onChange={(e)=>{
                setPassword(e.target.value)

             }}  className='border-2 border-emerald-600 px-5 py-3 text-black rounded-lg mt-6' type="password" placeholder='Enter Your Password' />

             <button className='border-2 border-emerald-600 bg-green-700 px-5 py-3 text-white rounded-lg mt-6'>submit</button>
           

            </form>

        </div>


    </div>
  )
}

export default Login