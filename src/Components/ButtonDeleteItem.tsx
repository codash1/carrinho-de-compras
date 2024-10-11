import { useCart } from "@/Contexts/ShoppingCartContext"



export const ButtonDeleteItem = ({id}:{id:number})=>{
    const cartCtx = useCart()
  return(
    <button onClick={() => cartCtx?.dispatch({ type: 'remove', payload: { id:id } })} className="bg-red-500 h-5 w-5 p-2 flex items-center justify-center rounded-full">x</button>
  )
}