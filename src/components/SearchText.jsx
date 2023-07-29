import {useRef} from "react";
import { useGlobalContext } from "./context";
export function SearchText() {
  const {setSearchText}=useGlobalContext();
  const searchValue=useRef('');

  const searchCocktail=(e)=>{
    e.preventDefault();
    setSearchText(searchValue.current.value);
  }
   
  return (
    <form onSubmit={searchCocktail} className="border-2 px-3 py-2 rounded-md m-auto w-max">
        <label htmlFor="name">Search your favorite drinks</label><br />
        <input type="search" name="name" id='name' ref={searchValue} className=" border-2 p-1 rounded-l-lg" />
        <button className="border-2 rounded-r-lg py-1 px-2 bg-white">Search</button>
    </form>
    )
}