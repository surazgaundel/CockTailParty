import React from "react";
import Loading from "./Loading";
import { useGlobalContext } from "./context";

export function CocktailList() {
    const {cocktails,loading} =useGlobalContext();
    console.log(loading);

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
     <div className="border-2 mt-5">
                Drinks list
    </div>
  )
}