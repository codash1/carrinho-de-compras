import { useCart } from "@/Contexts/ShoppingCartContext"
import { Modal } from "./Modal"
import { useEffect, useState } from "react"

import { CardCart } from "./CardCart"

 

 export const Cart =()=>{
    const cartCtx = useCart()
    const [isModalOpen,setModalOpen] = useState(false)
 
   
  const openModal = () =>{
    if(cartCtx?.cart.length !== 0){
        setModalOpen(true)
    }
  }
  
 const closeModal =()=>{
    setModalOpen(false)
   
 }
 useEffect(()=>{
   if(cartCtx?.cart.length === 0){
    setModalOpen(false)
   }
 },[cartCtx?.cart])
    return(
        <aside className="flex  flex-col items-center">
            <h1 className="">Quantidade [ {cartCtx?.cart.length} ]</h1>
            <div className="mt-4 flex flex-col gap-4">
                {cartCtx?.cart.map(item=>(
               <CardCart
               price={Number(item.price*item.quantity)} 
               name={item.name}
               image={item.image}
               category={item.category}
               quantity={item.quantity}
               id={item.id}/>
               
                ))}
            </div>
            {cartCtx?.cart.length !== 0 &&
            <button onClick={openModal} className="w-96 border  border-white/30 rounded-md mt-10 p-3 text-lg font-bold hover:bg-blue-500">Finalizar pedido</button>}
            {isModalOpen && <Modal onClose={closeModal} />}
        </aside>
    )
 }