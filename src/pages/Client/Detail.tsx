import { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { CartContextCT } from "../../hook/CartContext/CartContext";
import { CartItem } from "../../interface/cart";
import useProductQuery from "../../hook/Product/useProductQuery";
import sp8 from "../../image/20210212_140441_InPixio 1.png";
import sp7 from "../../image/ffef 1.png";
import sp6 from "../../image/ffef 3.png";
import sp9 from "../../image/ffef 4.png";
import { axiosInstance } from "../../config/axios";
import { toast } from "react-toastify";

const Detail = () => {
  const [quantity, setQuantity] = useState(3);

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const { id } = useParams();
  const { data } = useProductQuery(id);
  console.log(data);
  const { addCartItem } = useContext(CartContextCT);
  const navigate = useNavigate();
  const handleAddToCart = async () => {
    if (data) {
      const cartItem: CartItem = {
        id: data.id,
        name: data.name,
        quantity,
        description: data.description,
        price: data.price,
        image: data.image,
      };

      try {
        const cartResponse = await axiosInstance.get("carts");
        const cartItems: CartItem[] = cartResponse.data;

        const existingItem = cartItems.find((item) => item.id === data.id);

        if (existingItem) {
          await axiosInstance.patch(`carts/${existingItem.id}`, {
            quantity: existingItem.quantity + quantity,
          });
        } else {
          await axiosInstance.post("carts", cartItem);
        }

        addCartItem(cartItem);
        navigate("/cart");
      } catch (error) {
        console.error("Error adding item to cart:", error);
        toast.error("Đã xảy ra lỗi khi thêm vào giỏ hàng.");
      }
    }
  };
  return (
    <div>
      <div className="ml-20 pt-20 grid grid-cols-1 md:grid-cols-2">
        <div>
          <img src={data?.image} alt="" className="ml-28" width={200} />
          <div className="flex space-x-1 ml-14 mt-4">
            <img src={sp6} alt="" />
            <img
              src={sp7}
              alt=""
              className="hover:border hover:border-gray-500 rounded-lg"
            />
            <img
              src={sp8}
              alt=""
              className="hover:border hover:border-gray-500 rounded-lg"
            />
          </div>
        </div>
        <div>
          <p className="text-[#4E7C32] font-kumbh">CÂY</p>
          <h1 className="text-4xl font-kumbh font-bold mt-4 mb-4">
            {data?.name}
          </h1>
          <span className="text-[#68707D] mt-4">{data?.short_desc}</span>
          <div className="flex space-x-4 mt-4 items-center">
            <p className="font-bold">${data?.price}</p>
            <del className="text-sm font-bold text-red-400">$250.00</del>
            <span className="bg-[#FFEDE0] text-[#4E7C32] rounded-lg">
              50%
            </span>
          </div>
          
          <div className="flex space-x-10 mt-4">
            <div className="flex items-center justify-between w-40 p-2 bg-gray-50 border border-slate-300 rounded-full">
              <button className="" onClick={handleDecrement}>
                <span className="text-2xl">-</span>
              </button>
              <span className="text-xl font-bold">{quantity}</span>
              <button className="" onClick={handleIncrement}>
                <span className="text-2xl">+</span>
              </button>
            </div>
            <div className="flex bg-[#4E7C32] w-44 py-2 pl-6 rounded-lg">
              <AiOutlineShoppingCart className="text-white mt-2 mr-2 text-xl" />
              <button className="text-white" onClick={handleAddToCart}>
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-32 mt-10">
        <div className="w-full md:w-[800px]">
          <p className="text-[#4E7C32] text-2xl">Mô tả</p>
          <span className="text-[#665345]">{data?.description}</span>
        </div>
        <div className="mt-6">
          <p className="text-[#4E7C32] text-2xl">Về sản phẩm</p>
          <span className="text-[#665345]">
            Lorem Ipsum là một đoạn văn bản giả, được sử dụng trong ngành in ấn
            và dàn trang. Lorem Ipsum đã là văn bản giả tiêu chuẩn của ngành kể
            từ những năm 1500, khi một nhà in vô danh lấy một bộ sưu tập các chữ
            cái và sắp xếp chúng để tạo ra một cuốn sách mẫu.
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row ml-32 mt-10">
        <img src={sp9} alt="" />
        <p className="absolute right-96 text-white bg-[#4E7C32] p-2 rounded-lg">
          Viết đánh giá
        </p>
        <div className="flex mt-24 text-gray-500">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <span className="mt-32 ml-48 text-[#4E7C32] absolute">5.0 (388)</span>
      </div>
      <div className="flex ml-32 mt-10 space-x-1">
        1 <FaStar className="mt-1 border- border-gray-300" />
        <div className="relative w-3/6 h-4 mt-1 ">
          <div
            className="absolute top-0 left-0 h-4 bg-[#A2A0A0] rounded"
            style={{ width: "75%" }}
          ></div>
        </div>
      </div>
      <div className="flex ml-32 mt-2 space-x-1">
        2 <FaStar className="mt-1 border- border-gray-300" />
        <div className="relative w-3/6 h-4 mt-1 ">
          <div
            className="absolute top-0 left-0 h-4 bg-[#D9D9D9] rounded"
            style={{ width: "15%" }}
          ></div>
        </div>
      </div>
      <div className="flex ml-32 mt-2 space-x-1">
        3 <FaStar className="mt-1 border- border-gray-300" />
        <div className="relative w-3/6 h-4 mt-1 ">
          <div
            className="absolute top-0 left-0 h-4 bg-[#D9D9D9] rounded"
            style={{ width: "15%" }}
          ></div>
        </div>
      </div>
      <div className="flex ml-32 mt-2 space-x-1">
        4 <FaStar className="mt-1 border- border-gray-300" />
        <div className="relative w-3/6 h-4 mt-1 ">
          <div
            className="absolute top-0 left-0 h-4 bg-[#D9D9D9] rounded"
            style={{ width: "15%" }}
          ></div>
        </div>
      </div>
      <div className="flex ml-32 mt-2 space-x-1">
        5 <FaStar className="mt-1 border- border-gray-300" />
        <div className="relative w-3/6 h-4 mt-1 ">
          <div
            className="absolute top-0 left-0 h-4 bg-[#D9D9D9] rounded"
            style={{ width: "15%" }}
          ></div>
        </div>
      </div>
      <div className="mt-10 ml-32 w-full md:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-4 mt-44">
          <div className="flex items-center">
            <p className="text-[#4E7C32] mr-4 text-xl">Aman Gupta</p>
            <FaStar className="mt-2" />
            <FaStar className="mt-2" />
            <FaStar className="mt-2" />
            <FaStar className="mt-2" />
            <FaStar className="mt-2" />
          </div>
          <p className="text-sm text-[#665345] mt-2">
            Tôi đã sử dụng sản phẩm này khoảng năm hoặc sáu tháng và mụn của tôi
            gần như hoàn toàn biến mất. Tôi đã thực sự gặp khó khăn trong nhiều
            năm với làn da của mình và đã thử mọi thứ có thể nhưng đây là thứ
            duy nhất có thể làm sạch da của tôi. 100% khuyến nghị và sẽ tiếp tục
            sử dụng chắc chắn.
          </p>
        </div>
        <div className="ml-0 md:ml-40 w-full">
          <div className="p-4">
            <div className="flex items-center">
              <p className="text-[#4E7C32] mr-4 text-xl">Aman Gupta</p>
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
            </div>
            <p className="text-sm text-[#665345] mt-2">
              Tôi đã sử dụng sản phẩm này khoảng năm hoặc sáu tháng và mụn của
              tôi gần như hoàn toàn biến mất. Tôi đã thực sự gặp khó khăn trong
              nhiều năm với làn da của mình và đã thử mọi thứ có thể nhưng đây
              là thứ duy nhất có thể làm sạch da của tôi. 100% khuyến nghị và sẽ
              tiếp tục sử dụng chắc chắn.
            </p>
          </div>
          <div className="p-4">
            <div className="flex items-center">
              <p className="text-[#4E7C32] mr-4 text-xl">Aman Gupta</p>
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
              <FaStar className="mt-2" />
            </div>
            <p className="text-sm text-[#665345] mt-2">
              Tôi đã sử dụng sản phẩm này khoảng năm hoặc sáu tháng và mụn của
              tôi gần như hoàn toàn biến mất. Tôi đã thực sự gặp khó khăn trong
              nhiều năm với làn da của mình và đã thử mọi thứ có thể nhưng đây
              là thứ duy nhất có thể làm sạch da của tôi. 100% khuyến nghị và sẽ
              tiếp tục sử dụng chắc chắn.
            </p>
          </div>
        </div>
      </div>
      <button className="text-white bg-[#4E7C32] p-2 px-4 rounded-lg text-center block mx-auto mb-10">
        Xem tất cả
      </button>
    </div>
  );
};

export default Detail;
