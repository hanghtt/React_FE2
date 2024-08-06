import React from "react";

const PaymentMethod: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-neutral-600">
        Phương Thức Thanh Toán
      </h2>
      <div className="flex items-center justify-between">
        <span className="text-lg font-medium text-neutral-600">
          Phương thức thanh toán
        </span>
        <button className="bg-gray-300 text-neutral-600 py-1 px-3 rounded-md hover:bg-gray-400">
          Thay đổi
        </button>
      </div>
      <div className="mt-4">
        <span className="block text-sm font-medium text-neutral-600">
          MOMO / VNPay
        </span>
        <span className="block text-sm text-neutral-600">xxx-xxx-xx55</span>
      </div>
    </div>
  );
};

export default PaymentMethod;
