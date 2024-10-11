import { createContext, ReactNode, useContext, useState } from "react";

type FilterContext ={
    category:string
    setCategory:(category:string)=>void
}

export const FilterContext = createContext<FilterContext | null>(null)

export const FilterProvider =({children}:{children:ReactNode})=>{
  const [category,setCategory]=useState('')
  return(
    < FilterContext.Provider value={{category,setCategory}}>{children}</FilterContext.Provider>
  )
   
}

export const useFilter = ()=> useContext(FilterContext)