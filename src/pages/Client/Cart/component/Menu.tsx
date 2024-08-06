const MenuCart = () => {
  return (
    <div>
      <div className="hd-pagecart-header text-sm uppercase font-semibold pt-5 pb-1.5 border-solid border-b-2">
        <div className="flex flex-wrap mt-0 !items-center">
          <div className="lg:w-5/12 w-full flex-grow-0 flex-shrink-0 basis-auto hd-col-item">
            Sản phẩm
          </div>
          <div className="w-3/12 flex-grow-0 flex-shrink-0 basis-auto hd-col-item !text-center hidden lg:block">
            Giá
          </div>
          <div className="w-2/12 flex-grow-0 flex-shrink-0 basis-auto hd-col-item !text-center hidden lg:block">
            Số lượng
          </div>
          <div className="w-2/12 flex-grow-0 flex-shrink-0 basis-auto hd-col-item lg:text-end text-right hidden lg:block">
            Tổng
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCart;
