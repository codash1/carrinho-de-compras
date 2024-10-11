
import { ButtonQuantity } from "./ButtonQuantity"
import { ButtonDeleteItem } from "./ButtonDeleteItem"




type Props = {
    image: string
    name: string
    id: number
    price: number
    quantity:number
    category?:string
    
}






export const CardCart = ({image,name,id,price,category,quantity}:Props) => {
   
    return (


        <div  key={id}className=" flex w-96 border border-gray-600 p-4 rounded-md">
            <div className="h-20 w-20 bg-white/30 rounded-md"><img src={image} alt={name}
                className="" />
            </div>
            <div className="flex-1 ml-6">
                <div>{name}</div>
                <div className="text-sm text-white/30 font-normal">{category}</div>
                <div className="text-sm mt-3 flex">
                    <div className="flex-1">
                        <span className=" text-md">{ quantity}x</span>
                        <span className=" ml-2 text-lg">R$ {price.toFixed(2)}</span>
                    </div>
                    <ButtonQuantity quantity={quantity}
                        id={id} />
                </div>
            </div>

           <ButtonDeleteItem id={id}/>

        </div>

    )
}