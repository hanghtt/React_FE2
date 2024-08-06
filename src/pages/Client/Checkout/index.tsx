import React from "react";
import CartSummary from "./component/CartSummary";
import DeliveryAddress from "./component/DeliveryAddress";
import PaymentMethod from "./component/PaymentMethod";
// import OrderSummary from "./component/OrderSummary";

const CheckoutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-[#D2E8CD]">
        <h1 className="text-[#505F4E] py-14 w-[80%]  mx-auto text-3xl font-normal font-['Baloo'] leading-tight text-center">
          Thanh Toán
        </h1>
      </div>
      <div className="container mx-auto p-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            <DeliveryAddress />
          </div>
          <div className="space-y-6">
            <CartSummary />
            <PaymentMethod />
            {/* <OrderSummary /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
