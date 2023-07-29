import React from "react";
export function SearchText() {
  return (
    <form className="border-2 p-2 rounded-md">
        <label htmlFor="name">Search your favorite drinks</label><br />
        <input type="text" name="name" id='name' className=" border-2 p-1 rounded-l-lg" />
        <button className="border-2 rounded-r-lg py-1 px-2 bg-white">Search</button>
    </form>
    )
}