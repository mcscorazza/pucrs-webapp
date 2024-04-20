import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full h-svh flex items-center bg-slate-800 justify-center flex-col gap-2' >
      <div className='text-4xl text-white'>Login</div>
      <div><Link className='text-slate-400' to="/register">Registrar-se</Link></div>
      <div><Link className='text-slate-400' to="/app">Aplicação</Link></div>
    </div>

  )
}

export default Login