import React, { useContext } from "react";
import { CartContextCT } from "../../../../hook/CartContext/CartContext";

const CartSummary: React.FC = () => {
  const { cartItems } = useContext(CartContextCT);
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-semibold mb-4 text-neutral-600">
        Sản phẩm đã đặt
      </h2>
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 object-cover"
          />
          <div className="flex flex-col flex-grow ml-4">
            <span className="text-neutral-600">{item.name}</span>
            <span className="text-neutral-600">Black / 2XL</span>
          </div>
          <div className="flex items-center">
            <span className="mr-4 text-neutral-600">${item.price}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartSummary;
