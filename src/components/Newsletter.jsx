import React from 'react'
import subscription from '../subscription'
export default function Newsletter() {
  return (
    <div className="text-[var(--navyblue)] mt-3">
        <h1 className='text-center mb-2'>Choose a subscription plan</h1>
        <div className="flex flex-col md:flex-row gap-2 items-center">
            {subscription.map(plan=>{
                const {id,title,price,service}=plan;
                return(
                    <div key={id} className='border-2 border-[var(--navyblue)] rounded-lg lg:h-60 lg:m-auto bg-white hover:bg-gray-100 px-5 w-[90%] cursor-pointer'>
                        <section className='flex justify-between m-1'>
                            <label htmlFor={title} className='font-semibold'>{title}</label>
                            <input type='radio' value={title} name='plan'/>
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
        <div className="flex flex-col w-1/2 justify-center p-2 m-auto">
            <input type='number' placeholder='1234-567-890   MM/YY CVV' className="my-2 border-2 rounded-md p-1"/>
            <button className='border-2 rounded-md p-1 focus:ring-1 focus:ring-black hover:bg-white'>Subscribe</button>
        </div>
        <div className="text-[var(--gray)] mt-[10%] text-center h-[10vh]">
            <p>By registering you agree to <span className="underline">Bubble Bell's Terms of Use,</span> <span className="underline">our Privacy Policy</span> and <span className="underline">our Information collection notice.</span></p>
        </div>
    </div>
  )
}
