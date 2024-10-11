import { useFilter } from "@/Contexts/FilterContext"
import { useState } from "react"









export const FilterCategory = ()=>{

const FilterCtx = useFilter()

 const categorys:string[]=[
     'All','Dairy', 'Meat',
 ]


   
    return(
        <div>
        <select value={FilterCtx?.category}
        className="py-2 px-4 cursor-pointer rounded-md border border-white/30 bg-black text-wjite"
        onChange={e=>FilterCtx?.setCategory(e.target.value)}>
          {categorys.map((item)=>(
          <option>
            {item}
          </option>
          ))}
        </select>
        </div>
    )

}