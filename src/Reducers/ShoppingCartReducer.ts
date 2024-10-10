
import { products } from "@/Data/products";
import { Product } from "@/Types/Product"


type AddAction ={

     type:'add';
    
    payload:{
     id:number
    
   }
    
 }
    
type RemoveAction ={
    
    type:'remove'
    
    payload:{
    id:number
   }
    
    }

type IncreaseAction ={
    type:'increse'
    payload:{
        id:number
    }
}

type DecreaseAction ={
    type:'decrease'
    payload:{
        id:number
    }
}


export type CartActions = AddAction|RemoveAction |IncreaseAction|DecreaseAction



 export const ShoppingCartReducer = (cart:Product[] ,action:CartActions):Product[]=>{

    switch(action.type){
     case'add':{
       const productToAdd = products.find(item => item.id === action.payload.id)

       const productInCart = cart.find(item => item.id === action.payload.id)

       if(productToAdd){
        if(productInCart){
            return cart.map(item=>
                item.id === productToAdd.id
                ?{...item, quantity: item.quantity + 1}
                : item
            );
        }else{
            return[...cart, {...productToAdd, quantity:1}]
        }

       }
       return cart
     }
    
     case'remove':{
       return cart.filter(item => item.id !== action.payload.id)
     }

     case 'increse':{
        const product = cart.find(item => item.id === action.payload.id)


        if(product){
            return cart.map(item => 
                item.id === product.id
                ? {...item, quantity:item.quantity +1 }
                : item
            )
        }
        return cart;

     }
     case 'decrease':{
        const product = cart.find(item => item.id === action.payload.id)


        if(product && product.quantity > 1){

            return cart.map(item => 
                item.id === product.id
                ? {...item, quantity:item.quantity -1 }
                : item
            )
        }
        return cart;

     }
     default:{
        return cart
     }
        
    }
}