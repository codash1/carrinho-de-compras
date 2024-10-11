import { products } from "@/Data/products"
import { CardProduct } from "./CardProduct"
import { FilterCategory } from "./FilterCategory"
import { FilterProvider, useFilter } from "@/Contexts/FilterContext"



export const  ProductsList = ()=>{
   const FilterCtx = useFilter()
    return(
   
      <div>
      <div className="mb-10 ">
        <FilterCategory/>
      </div>

    {FilterCtx?.category === 'All' || FilterCtx?.category === '' ?
      <ul className=" md:h-4/6 grid  grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 ">
      {products.map((product)=>(
       <li 
       key={product.id}>
        <CardProduct
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
       quantity={product.quantity}
       category={product.category}
       />
       </li>
        ))}
      </ul>
      :
       <ul className=" md:h-4/6 grid  grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-8 ">
       {products.map((product)=>(
        FilterCtx?.category === product.category &&
        <CardProduct
        id={product.id}
        image={product.image}
        name={product.name}
        price={product.price}
       quantity={product.quantity}
       category={product.category}/>
        ))}
       </ul>
      
     }

    </div>

    
  )
}
