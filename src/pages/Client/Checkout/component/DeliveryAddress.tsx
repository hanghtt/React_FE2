import { useNavigate } from "react-router-dom";
import { CartContextCT } from "../../../../hook/CartContext/CartContext";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const DeliveryAddress: React.FC = () => {
  const { cartItems } = useContext(CartContextCT);
  const [infos, setInfos] = useState({
    name: "",
    sdt: "",
    email: "",
    diachi: "",
  });
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    // Calculate the total amount from cart items
    const amount = cartItems.reduce(
      (total, product) => total + product.price * (product.quantity || 1),
      0
    );
    setTotalAmount(amount);
  }, [cartItems]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInfos((prevInfo) => ({ ...prevInfo, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Tạo đối tượng đơn hàng
      const order = {
        ...infos,
        items: cartItems,
        totalAmount: totalAmount + 5.0 + 4.2, // Tổng cộng bao gồm vận chuyển và thuế
      };

      // Gửi thông tin đơn hàng đến API
      await axios.post("http://localhost:3000/orders", order); // Địa chỉ API của bạn

      toast.success("Đặt hàng thành công");
      navigate("/");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Đã xảy ra lỗi khi đặt hàng. Vui lòng thử lại.");
    }
  };
  return (
    <>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-600">
          Địa chỉ giao hàng
        </h2>
        <form className="" onSubmit={handleSubmit}>
          <div className="py-5">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-neutral-600"
              >
                Tên
              </label>
              <input
                id="name"
                type="text"
                value={infos.name}
                onChange={handleInputChange}
                className="mt-1 block w-full shadow-sm "
                required
                placeholder="Tên của bạn"
              />
            </div>
            <div>
              <label
                htmlFor="sdt"
                className="block text-sm font-medium text-neutral-600 mt-5"
              >
                Số điện thoại
              </label>
              <input
                id="sdt"
                type="text"
                value={infos.sdt}
                onChange={handleInputChange}
                className="mt-1 block w-full "
                required
                placeholder="Số điện thoại của bạn"
              />
            </div>
          </div>
          <div className="">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-600 "
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                value={infos.email}
                onChange={handleInputChange}
                className="mt-1 block w-full "
                required
                placeholder="Email của bạn"
              />
            </div>
          </div>
          <div className="">
            <div>
              <label
                htmlFor="diachi"
                className="block text-sm font-medium text-neutral-600 mt-5"
              >
                Địa chỉ
              </label>
              <input
                id="diachi"
                type="text"
                value={infos.diachi}
                onChange={handleInputChange}
                className="mt-1 block w-full"
                required
                placeholder="Địa chỉ của bạn"
              />
            </div>
          </div>
          {/* <div className="mt-4">
            <span className="block text-sm font-medium text-neutral-600">
              Giao đến:
            </span>
            <div className="flex items-center">
              <input
                name="addressType"
                type="radio"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              />
              <label
                htmlFor=""
                className="ml-3 block text-sm font-medium text-neutral-600"
              >
                Nhà (Giao hàng cả ngày)
              </label>
            </div>
            <div className="flex items-center">
              <input
                name="addressType"
                type="radio"
                className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
              />
              <label
                htmlFor=""
                className="ml-3 block text-sm font-medium text-neutral-600"
              >
                Văn phòng (Giao hàng từ 9:00 AM - 5:00 PM)
              </label>
            </div>
          </div> */}
        </form>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-600">
          Tổng 
        </h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="space-y-2">
            {/* <div className="flex justify-between">
              <span className="text-neutral-600">Tổng phụ</span>
              <span className="text-neutral-600">Tùy Tâm^^</span>
            </div> */}
            <div className="flex justify-between">
              <span className="text-neutral-600">Phí vận chuyển</span>
              <span className="text-neutral-600">Free Ship</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span className="text-neutral-600">Tổng tiền</span>
              <span className="text-red-600 text-lg">${totalAmount.toFixed(2)}</span>
            </div>
            <button className="bg-[#298456] text-center h-[50px] w-full px-[45px] font-semibold rounded-full text-white hover:bg-[#4fcd9f] transition-all ease-in-out duration-300">
              Thanh Toán
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DeliveryAddress;
