import { useContext } from "react";
import { AiFillEdit, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { CartContextCT } from "../../../../hook/CartContext/CartContext";
import { CartItem } from "../../../../interface/cart";

const ItemCart = () => {
  const { cartItems, removeCartItem, updateQuantity } =
    useContext(CartContextCT);

  const groupedItems: { [key: string]: CartItem } = {};

  cartItems.forEach((item) => {
    if (!groupedItems[item.name]) {
      groupedItems[item.name] = { ...item };
    } else {
      groupedItems[item.name].quantity += item.quantity;
    }
  });

  const groupedItemsArray = Object.values(groupedItems);

  const totalAmount = groupedItemsArray.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleQuantityChange = (name: string, delta: number) => {
    const product = cartItems.find((item) => item.name === name);
    if (product) {
      const newQuantity = product.quantity + delta;
      if (newQuantity > 0) {
        updateQuantity(name, newQuantity);
      }
    }
  };

  return (
    <div>
      <div className="hd-pagecart-items">
        <div className="hd-item relative overflow-hidden">
          {groupedItemsArray.length > 0 ? (
            groupedItemsArray.map((item: CartItem) => (
              <div
                className="hd-item-row lg:py-[2rem] py-[1rem] !items-center flex flex-wrap border-solid border-b-2"
                key={item.id}
              >
                <div className="hd-infor-item lg:w-5/12 w-full hd-col-item">
                  <div className="hd-infor !items-center !flex">
                    <img
                      className="min-w-[120px] max-w-[120px] block overflow-hidden relative w-full touch-manipulation pb-[10px] lg:pb-0"
                      src={item.image}
                    ></img>
                    <div className="hd-infor-text ms-4">
                      <Link
                        to=""
                        className="text-sm font-semibold block mb-[5px] touch-manipulation hd-all-hover-bluelight"
                      >
                        {item.name}
                      </Link>

                      <div className="hd-infor-text-meta text-[13px] text-[#878787]">
                        <p className="mb-[5px]">
                          Màu sắc: <strong>Xanh</strong>
                        </p>
                        <p className="mb-[5px]">
                          Size: <strong>M</strong>
                        </p>
                      </div>

                      <div className="hd-infor-text-tools mt-[10px]">
                        <Link to="" className="inline-flex me-[10px]">
                          <AiFillEdit />
                        </Link>
                        <Link to="" className="inline-flex me-[10px]">
                          <RiDeleteBin5Fill
                            onClick={() => removeCartItem(item.id)}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hd-price-item !text-center w-3/12 hd-col-item lg:block hidden">
                  <div className="hs-prices">
                    <div className="hd-text-price">
                      <ins className="ms-[6px] no-underline">
                        ${item.price}
                      </ins>
                    </div>
                  </div>
                </div>
                <div className="hd-quantity-item !text-center w-2/12 hd-col-item lg:block hidden">
                  <div className="hd-quantity relative min-w-[120px] w-[120px] h-10 mx-auto hd-all-btn flex items-center justify-between">
                    <button
                      type="button"
                      className="hd-btn-item text-sm cursor-pointer shadow-none transform-none touch-manipulation"
                      onClick={() => handleQuantityChange(item.name, -1)}
                    >
                      <AiOutlineMinus />
                    </button>
                    <span className="select-none leading-9 cursor-text font-semibold text-base">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      className="hd-btn-item text-sm cursor-pointer shadow-none transform-none touch-manipulation"
                      onClick={() => handleQuantityChange(item.name, 1)}
                    >
                      <AiOutlinePlus />
                    </button>
                  </div>
                </div>
                <div className="hd-total-item hd-col-item text-end w-2/12 lg:block hidden">
                  <span className="font-medium">
                    ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <tr>
              <td colSpan={5} className="px-6 py-4 text-center text-gray-500">
                Giỏ hàng của bạn đang trống.
              </td>
            </tr>
          )}
          <div className="hd-cart-total uppercase mb-[10px] text-black lg:text-[20px] text-[18px]">
            <div className="flex-wrap !items-center !justify-between !inline-flex gap-[30px]">
              <div className="hd-col-item w-auto">
                <strong className="font-semibold">Tổng:</strong>
              </div>
              <div className="hd-col-item w-auto">
                <div className="text-right font-semibold">
                  ${totalAmount.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
