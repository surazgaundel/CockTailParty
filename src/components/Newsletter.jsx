import React from 'react'
import subscription from '../subscription'
export default function Newsletter() {
  return (
    <div className="text-[var(--navyblue)]">
        <h1 className='text-center mb-2'>Choose a subscription plan</h1>
        <div className="flex flex-col md:flex-row gap-2 items-center">
            {subscription.map(plan=>{
                const {id,title,price,service}=plan;
                return(
                    <div key={id} className='border-2 rounded-lg md:h-52 px-5 w-[90%] focus:border-teal-300'>
                        <section className='flex justify-between m-1'>
                            <h1 className='font-semibold'>{title}</h1>
                            <input type='radio'/>
                        </section>
                            <p className='italic m-1'>{price}</p>
                        <ul className='m-1 p-1 list-disc'>
                            {service.map((item,index)=>{
                                return(
                                    <li key={index}>{item.point}</li>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
        <div>
            <input type='number' placeholder='Card number'/>
        </div>
    </div>
  )
}
