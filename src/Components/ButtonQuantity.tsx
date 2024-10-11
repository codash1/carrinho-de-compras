import { useCart } from "@/Contexts/ShoppingCartContext"





type Props={
    quantity:number
    id:number
}



export const ButtonQuantity =({quantity,id}:Props)=>{

 const cartCtx = useCart()


const decreaseItem=(id:number)=>{
 
    if( quantity > 1){
       cartCtx?.dispatch({type:'decrease', payload:{id}})
    }else {
        cartCtx?.dispatch({type:'remove', payload:{id}})
    }
}


 return(
    <div className="flex gap-4 items-center ">
          <button  onClick={()=>decreaseItem(id)}className="bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center p-2 text-lg font-bold">-</button>
          <div>{quantity}</div>
          <button onClick={()=>cartCtx?.dispatch({type:'increse', payload:{id}})}className="bg-blue-500 rounded-full h-5 w-5 flex items-center justify-center p-2 text-lg font-bold">+</button>
         </div>
        
 )
}