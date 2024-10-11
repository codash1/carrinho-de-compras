
"use client";

import { Cart } from "@/Components/Cart";
import { ProductsList } from "@/Components/ProductsList";
import { FilterProvider } from "@/Contexts/FilterContext";
import { CartProvider } from "@/Contexts/ShoppingCartContext";


export default function Home() {
  return(
   <FilterProvider>
    <CartProvider>
    
   <div className="h-screen max-w-7xl md:mx-auto mx-3">
    <header className="h-32 flex items-center">
    <h1 className="text-3xl text-bold">Shopping Cart</h1>
    </header>

    <main className="grid grid-cols-1 md:grid-cols-2 h-full">
      
   
    <ProductsList/>
  
     <Cart/>
    </main>
   
    
    
   </div>
   </CartProvider>
   </FilterProvider>
  )
  
}
