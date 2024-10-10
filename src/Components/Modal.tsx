import { useCart } from "@/Contexts/ShoppingCartContext";
import { ButtonQuantity } from "./ButtonQuantity";

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="w-96 relative bg-black border border-white/30 rounded-lg">
        <h1 className="text-white text-2xl p-4 font-bold rounded-md">Deseja finalizar a compra?</h1>
        
        {/* Mostra os itens do carrinho */}
        {cartCtx?.cart.map((item) => (
          <div key={item.id} className="border-b border-white/30 flex gap-4 p-4">
            <img src={item.image} alt={item.name} className="h-14 w-14" />
            <div className="flex-1">
              <div className="">{item.name}</div>
              <div className="text-sm ">
                {item.quantity}X R$ {(item.price * item.quantity).toFixed(2)}
              </div>
             
            </div>
            <ButtonQuantity
              quantity={item.quantity}
              id={item.id}/>
          </div>
        ))}

        {/* Mostra o total calculado */}
        <div className="text-white p-4">Total: R${Total}</div>

        {/* Botão para fechar o modal */}
        <button onClick={onClose} className="text-white  bg-red-500 p-2 rounded-full h-8 w-8 absolute top-2 right-2 flex items-center justify-center">X
        </button>
      </div>
    </div>
  );
};
