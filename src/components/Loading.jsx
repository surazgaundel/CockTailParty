import React from 'react'
import loading from '../assets/loading.gif'
export default function Loading() {

  return (
    <div className="flex items-center justify-center h-[50vh]">
        <img src={loading} className='h-20' alt="loading..." />
    </div>
  )
}
