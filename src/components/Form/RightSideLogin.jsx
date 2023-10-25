import React from 'react'
import {useForm} from 'react-hook-form'
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';



function RightSideLogin() {
  const { register, handleSubmit } = useForm();
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { email, password } = data;
    if (login(email, password)) {
      navigate('/Main/*');
    } else {
      alert('Incorrect email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >

      <div className='bg-white rounded-md'>
     <div className='flex flex-col  gap-4 shadow-xl py-5 px-5'>
     <input className='text-lg px-4 py-3 border border-gray-200 rounded-md outline-blue-400' type="email" placeholder='Email address or phone number' {...register('email')} />
     <input className='text-lg px-4 py-3 border border-gray-200 rounded-md outline-blue-400' type="password" placeholder='Password' {...register('password')}/>
     <button className='text-xl px-2 py-2 bg-[#1877f2] font-semibold text-white rounded-md' type="submit">Log in</button>
     <hr/>
     <div className='flex justify-center'>
     <span className='text-blue-500 cursor-pointer hover:underline'>Forgotten password?</span>
     </div>
     <div className='flex justify-center'>
     <button className='px-4 py-3 bg-[#42b72a] text-lg font-semibold text-white rounded-md'>Create new account</button>
     </div>
     </div>
    </div>
    </form>
  )
}

export default RightSideLogin
