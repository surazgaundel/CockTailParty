import React from 'react'
import ErrorImg from '../assets/SWW.svg';
import { useNavigate } from 'react-router-dom';

export default function Error() {
    const navigate=useNavigate();

  return (
    <div className='flex flex-col justify-center'> 
        <img src={ErrorImg} className='h-52' alt='page not found'/>
        <div>
            <h1>Sorry, we can't find that page! Don't worry though, you can still enjoy the party!!.🥂🍻</h1>
            <p onClick={()=>navigate('/')} className="text-center mt-3 cursor-pointer underline hover:text-[var(--navyblue)]"> Go to Home Page</p>
        </div>
    </div>
  )
}
