import { ButtonAddToCart } from "./ButtonAddToCart"



type Props ={
    image:string
    name:string
    id:number
    price:number
    category:string
    quantity:number

}

export const CardProduct  = ({image,name,id,price,category,quantity}:Props)=>{

return(
    <div className="border  border-white/30 w-96  md:max-w-40 rounded-md shadow-sm h-64">
     <div className="flex items-center justify-center p-4">
        <img src={image} alt={name}
        
        className="w-20 h-20" />
        </div>
        
        <div className="border-t border-white/30 p-4 ">
          <h1 className="text-md font-bold">{name}</h1>
          <p className="txt-sm text-white/30">{category}</p>
          <p className="text-sm text-blue-500 mb-3 mt-1">R$: {price.toFixed(2)}</p>
          <ButtonAddToCart id={id} />
        </div>
    </div>
)


}