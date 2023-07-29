import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "./context";
import {useNavigate} from 'react-router-dom';

export function CocktailList() {
    const {cocktails,loading} =useGlobalContext(); 
    const navigate=useNavigate(); 

    if(loading){
        return(<Loading/>)
    }
    if(cocktails.length<1){
        return(
            <h2 className="flex capitalize justify-center items-center h-[50vh]">
                No cocktails found.
            </h2>
        )
    }
return(
    <div className="flex flex-col justify-center items-center mt-3 ">
        <h1>Enjoy the listed Cocktails</h1>
        <div className="flex flex-col md:flex-row justify-center my-2 flex-wrap gap-2">
            {cocktails.map(item=>{
                const {id,name,image,info,glass}=item;
                return(<div key={id} className='flex flex-col border-2 shadow-lg rounded-lg my-3' >
                    <img src={image} alt={name} className='object-cover h-48 w-96 rounded-t-lg'/>
                    <section className='mx-3 my-2'>
                        <h1 className="font-bold">{name}</h1>
                        <h3>{glass}</h3>
                        <h2>{info}</h2>
                        <button onClick={()=>navigate(`cocktails/${id}`)} className='border-2 px-2 py-1 rounded-md bg-white font-semibold mt-1 hover:bg-gray-100'>Details</button>
                    </section>
                </div>)
            })}
        </div>
    </div>
  )
}