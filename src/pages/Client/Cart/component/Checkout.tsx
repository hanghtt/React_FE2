import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div>
      <div className="hd-pagecart-footer lg:my-[60px]">
        <div className="hd-footer lg:flex lg:flex-wrap mt-[30px]">
          <div className="hd-note-text text-start lg:w-[50%] !order-2 hd-col-item mt-8 lg:max-w-full">
            <div className="hd-node-gift mb-6 lg:items-center lg:flex">
              {/* </div> */}
            </div>
            <label className="mb-3 !block">
              <span>Ghi chú đơn hàng</span>
              <span className="hidden">Chỉnh sửa ghi chú đơn hàng</span>
            </label>
            <textarea
              className="min-h-28 px-3 py-2 resize-none !w-full hd-cart-note"
              placeholder="Chúng tôi có thể giúp bạn?"
              defaultValue={""}
            />
          </div>
          {/*end hd-note-text*/}
          <div className="hd-sub-total text-end !order-4 lg:w-[50%] hd-col-item my-[30px] hd-all-textgrey">
            <div className="border-b-0 shadow-none pt-[10px] pb-[4px] pl-[20px] text-[13px] leading-normal">
              <div className="hd-cart-ship">
                <div className="hd-ship-text2 hidden">
                  <span className="text-green-600">Chúc mừng!</span>
                  Bạn đã nhận được mã
                  <span className="uppercase text-black font-semibold">
                    Miễn phí vận chuyển.
                  </span>
                </div>
              </div>
            </div>
          
            {/* <p className="mb-[10px]">
                      Thuế và phí vận chuyển được tính khi thanh toán
                    </p> */}
            <div className="relative inline-block mb-[20px]">
              <input
                type="checkbox"
                className="size-3.5 absolute rounded-md shadow-sm top-1 -left-6"
              />
              <label>Tôi đồng ý với các điều khoản và điều kiện.</label>
            </div>
            <div className=" ">
              <Link to={`/checkout`}>
                <button
                  type="submit"
                  className="bg-[#298456] text-base h-[50px] w-auto px-[45px] font-semibold rounded-full text-white inline-flex items-center relative overflow-hidden hover:bg-[#4fcd9f] transition-all ease-in-out duration-300"
                >
                  Thanh Toán
                </button>
              </Link>
            </div>
          </div>

          {/*end hd-sub-total*/}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
