import { useCart } from "@/Contexts/ShoppingCartContext"
import { Modal } from "./Modal"
import { useState } from "react"
import { ButtonQuantity } from "./ButtonQuantity"

 

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
    return(
        <aside className="flex  flex-col items-center">
            <h1 className="">Quantidade [ {cartCtx?.cart.length} ]</h1>
            <div className="mt-4 flex flex-col gap-4">
                {cartCtx?.cart.map(item=>(
                    
                    <div className=" flex w-96 border border-gray-600 p-4 rounded-md">
                        <div className="h-20 w-20 bg-white/30 rounded-md"><img src={item.image} alt={item.name}
                        className=""/>
                        </div>
                        <div className="flex-1 ml-6">
                            <div>{item.name}</div>
                            <div className="text-sm text-white/30 font-normal">{item.category}</div>
                            <div className="text-sm mt-3 flex">
                                <div className="flex-1">
                                <span className=" text-md">{item.quantity}x</span>  
                                 <span className=" ml-2 text-lg">R$ {(item.price * item.quantity).toFixed(2)}</span>
                                 </div>
                                 <ButtonQuantity quantity={item.quantity}
                                 id={item.id}/>
                               </div>
                        </div>
                        
                        <button onClick={()=>cartCtx.dispatch({type:'remove', payload:{id:item.id}})} className="bg-red-500 h-5 w-5 p-2 flex items-center justify-center rounded-full">x</button>

                    </div>
                ))}
            </div>
            {cartCtx?.cart.length !== 0 &&
            <button onClick={openModal} className="w-96 border  border-white/30 rounded-md mt-10 p-3 text-lg font-bold hover:bg-blue-500">Finalizar pedido</button>}
            {isModalOpen && <Modal onClose={closeModal} />}
        </aside>
    )
 }