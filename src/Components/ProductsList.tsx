import { products } from "@/Data/products"
import { ButtonAddToCart } from "./ButtonAddToCart"


export const  ProductsList = ()=>{
  return(
    <ul className=" md:h-4/6 grid  grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 ">
      {products.map((product)=>(
       <li 
       key={product.id}
       className="border  border-white/30 w-96  md:max-w-40 rounded-md shadow-sm h-60"
       >
        <div className="flex items-center justify-center p-4">
        <img src={product.image} alt={product.name}
        
        className="w-20 h-20" />
        </div>
        
        <div className="border-t border-white/30 p-4 ">
          <h1 className="text-md font-bold">{product.name}</h1>
          <p className="text-sm text-blue-500 mb-3 mt-1">R$: {product.price.toFixed(2)}</p>
          <ButtonAddToCart id={product.id}/>
        </div>

       </li>
      ))}
    </ul>
    
  )
}
