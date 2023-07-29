/* eslint-disable react/prop-types */
import {createContext, useContext, useEffect, useState} from 'react'
const url='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext=createContext();

const AppProvider=({children})=>{
    const [loading,setLoading]=useState(false);
    const [searchText,setSearchText]=useState('a');
    const [cocktails, setCocktails]=useState([]);

    const fetchDrinks=async()=>{
        setLoading(true);
        try{
            const response=await fetch(`${url}${searchText}`);
            const data=await response.json(); 
            const {drinks}=data;
            if(drinks){
                const newCocktails = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                    } = item

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                })
                setCocktails(newCocktails)
                setLoading(false)
            }else{
                setCocktails([])
                setLoading(false);
            }
            
        }
        catch(error){
            console.log(error);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchDrinks();
    },[searchText]);

    return(
        <AppContext.Provider value={{
            loading,searchText,cocktails,setSearchText
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext, AppProvider};
