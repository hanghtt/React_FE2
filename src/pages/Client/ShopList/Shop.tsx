import ShopFilter from "./component/ShopFilter";
import ShopTop from "./component/ShopTop";

const Shop = () => {
  return (
    <div>
      <div className="bg-[#D2E8CD] text-center">
        <h1 className="text-[#505F4E] py-14 w-[80%]  mx-auto text-3xl font-normal font-['Baloo'] leading-tight">
          Danh sách sản phẩm
        </h1>
      </div>
      {/* ShopTop */}
      <ShopTop />
      {/* End ShopTop */}

      {/* ShopFilter */}
      <ShopFilter />
      {/* End ShopFilter */}
    </div>
  );
};

export default Shop;
