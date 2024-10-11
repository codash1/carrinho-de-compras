import { useCart } from "@/Contexts/ShoppingCartContext"
import { useEffect, useState } from "react"
import { ButtonQuantity } from "./ButtonQuantity"

type Props={
  id:number
}

export const ButtonAddToCart = ({id}:Props)=>{

    const cartCtx = useCart()
    const [inTheCart, setInTheCart]=useState(false)
    const [quantity,setQuantity]=useState<number>(0)



    const handleAddCat=(id:number)=>{

    if(id){
         console.log('adicionando item no carrinho')
        cartCtx?.dispatch({
          type:'add',
          payload:{id}
        })
     
      }
    }
   
    useEffect(()=>{
      const  item = cartCtx?.cart.find(item => item.id === id)
      if (item){
           setQuantity(item.quantity)
           setInTheCart(true)

      }else{
        setInTheCart(false)
        setQuantity(1)
      }
    },[cartCtx?.cart,id])
  

    return(
      <div className="w-full flex justify-center">
      {inTheCart ? (
        <ButtonQuantity
          id={id}
          quantity={quantity}
        />
      ) : (
        <button onClick={() => handleAddCat(id)} className="bg-green-500 w-full py-1 rounded-md hover:bg-green-600">
          ADD
        </button>
      )}
    </div>
    )
}