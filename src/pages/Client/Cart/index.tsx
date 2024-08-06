import { Link } from "react-router-dom";
import Checkout from "./component/Checkout";
import MenuCart from "./component/Menu";
import ItemCart from "./component/ItemCart";
const CartPage = () => {
  return (
    <>
      <main
        id="main-content"
        className="min-h-fit !shadow-none !outline-0 block isolate *:box-border"
      >
        <div className="bg-[#D2E8CD]">
          <h1 className="text-[#505F4E] py-14 w-[80%]  mx-auto text-3xl font-normal font-['Baloo'] leading-tight text-center">
            Giỏ hàng
          </h1>
        </div>
        {/*end hd-page-head*/}
        <section className="hd-page-body text-[14px] lg:mt-[60px] mt-[30px] block m-0 p-0 border-0 isolate *:box-border">
          <div className="hd-container block px-40">
            <form className="hd-form-cart overflow-hidden relative">
              <MenuCart />
              <ItemCart />
              <Checkout />
              <div className="hd-btn-gift ml-[500px] my-[15px]">
                <Link
                  to={"/shop"}
                  className="bg-[#298456] text-base h-[50px] w-auto px-[45px] font-semibold rounded-full text-white inline-flex items-center relative overflow-hidden hover:bg-[#4fcd9f] transition-all ease-in-out duration-300"
                >
                  <span>Mua Thêm</span>
                </Link>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default CartPage;
