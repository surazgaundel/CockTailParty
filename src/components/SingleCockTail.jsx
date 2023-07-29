import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from './Loading';
const url='https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
export default function SingleCockTail() {
    const {id}=useParams();
    const [loading,setLoading] = useState();
    const [cocktail,setCocktail] = useState(null);

    const getCocktail=async()=>{
        try{
            const response=await fetch(`${url}${id}`);
            const data=await response.json();
            const {drinks}=data;
            if(drinks){
                const {
                    strDrink: name,
                    strDrinkThumb: image,
                    strAlcoholic: info,
                    strCategory: category,
                    strGlass: glass,
                    strInstructions: instructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                } = drinks[0]

                const ingredients = [
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                ]
                const newCocktail = {
                    name,
                    image,
                    info,
                    category,
                    glass,
                    instructions,
                    ingredients,
                }
                setCocktail(newCocktail)
                setLoading(false)
            }else{
                setCocktail(null);
            }
        }
        catch(error){
            console.log(error);
            setLoading(false);
        }
    }
useEffect(()=>{
    setLoading(true);
    getCocktail();
},[id])
if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <h2 className='capitalize flex items-center justify-center h-[50vh]'>no cocktail to display</h2>
  } else {
    const {name,image,info,category,glass,instructions,ingredients}=cocktail;
    return (
        <section className='flex flex-col justify-center items-center'>
    <Link to='/' className='underline font-semibold capitalize'>
      back home
    </Link>
    <h2 className='uppercase text-xl mt-3 text-[var(--navyblue)]'>{name}</h2>
    <div className='flex flex-col w-[80%] md:flex-row justify-center items-center'>
      <img className='h-72 md:w-72 w-full m-2 object-cover rounded-md mx-2' src={image} alt={name}/>
      <div className='border-2 rounded-md bg-slate-200 px-2 h-72 py-1 items-center justify-center'>
        <p>
             <span className='capitalize font-semibold leading-8 bg-slate-50 px-1 rounded-md'>name :</span> {name}
        </p>
        <p>
            <span className='capitalize font-semibold leading-8 bg-slate-50 px-1 rounded-md'>category :</span> {category}
        </p>
        <p>
            <span className='capitalize font-semibold leading-8 bg-slate-50 px-1 rounded-md'>info :</span> {info}
        </p>
        <p>
            <span className='capitalize font-semibold leading-8 bg-slate-50 px-1 rounded-md'>glass :</span> {glass}
        </p>
        <p>
            <span className='capitalize font-semibold leading-8 bg-slate-50 px-1 rounded-md'>instructons :</span> {instructions}
        </p>
        <p>
          <span className='capitalize font-semibold leading-8 bg-slate-50 px-1 rounded-md'>ingredients :</span>
          {ingredients.map((item, index) => {
              return item ? <span key={index}> {item}</span> : null
          })}
        </p>
      </div>
    </div>
  </section>
  )
}
}
