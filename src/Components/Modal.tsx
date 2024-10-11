import { useCart } from "@/Contexts/ShoppingCartContext";
import { CardCart } from "./CardCart";

type Props = {
  onClose: () => void; // Função que será chamada para fechar o modal
};

export const Modal = ({ onClose }: Props) => {
  const cartCtx = useCart();

  // Verifica se há itens no carrinho antes de calcular o total
  const Total = cartCtx?.cart.length
    ? cartCtx.cart.reduce((acumulador, item) => acumulador + item.price * item.quantity, 0).toFixed(2)
    : "0.00";

  return (
    <div className="fixed h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="w-96 relative bg-black border border-white/30 rounded-lg">
        <h1 className="text-white text-xl p-4 font-bold rounded-md mt-10">Deseja finalizar a compra?</h1>
        
        {/* Mostra os itens do carrinho */}
        {cartCtx?.cart.map((item) => (
          <div key={item.id} className="border-b border-white/30 flex gap-4 p-4">
            <CardCart
            id={item.id}
            price={item.price}
            name={item.name}
            quantity={item.quantity}
            image={item.image}/>
         </div>
        ))}

        {/* Mostra o total calculado */}
        <div className="text-white p-4 flex text-lg">
          <span className="flex-1">Total:</span>
          <span>R$ {Total}</span>
        </div>
       <div className="w-full flex justify-center m-4">
        <button className="bg-blue-500 w-56 py-3 px-4 rounded-lg">FINALIZAR</button>
       </div>
        {/* Botão para fechar o modal */}
        <button onClick={onClose} className="text-white  bg-red-500 p-2 rounded-full h-8 w-8 absolute top-2 right-2 flex items-center justify-center">X
        </button>
      </div>
    </div>
  );
};
