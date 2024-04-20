import React from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='w-full h-svh flex items-center bg-slate-800 justify-center flex-col gap-2' >
      <div className='text-4xl text-white'>Register</div>
      <div><Link className='text-slate-400' to="/">Login</Link></div>
    </div>
  )
}

export default Register