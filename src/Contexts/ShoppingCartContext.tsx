
import { CartActions, ShoppingCartReducer } from "@/Reducers/ShoppingCartReducer";
import { Product } from "@/Types/Product";
import { Dispatch, ReactNode, useContext, useReducer } from "react";
import { createContext } from "react";



type ContextType ={
    cart:Product[]
    dispatch:Dispatch<CartActions>
}


export const ShoppingCartContext = createContext<ContextType |null>(null)

 export const CartProvider = ({children}:{children:ReactNode})=>{
    const [cart,dispatch]=useReducer(ShoppingCartReducer,[])
   return(
     <ShoppingCartContext.Provider value={{cart,dispatch}}>{children}</ShoppingCartContext.Provider>
   )
 }

 export const useCart= ()=>useContext(ShoppingCartContext)