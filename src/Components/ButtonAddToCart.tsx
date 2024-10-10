import { useCart } from "@/Contexts/ShoppingCartContext"


export const ButtonAddToCart = ({id}:{id:number})=>{
    const cartCtx = useCart()
    const handleAddCat=(id:number)=>{
      cartCtx?.dispatch({
        type:'add',
        payload:{id}
      })
      console.log(cartCtx?.cart)
    }
    return(
        <button onClick={()=>handleAddCat(id)}className="bg-green-500 w-full 4 py-1 rounded-md hover:bg-green-600">Add</button>
    )
}