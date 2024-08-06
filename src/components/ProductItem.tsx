import { Link } from "react-router-dom";
import { IProduct } from "../interface/product";
// import useProductQuery from "../hook/Product/useProductQuery";

const ProductItem = ({ products }: IProduct) => {
  // const { data: products } = useProductQuery();

  return (
    <Link to={`/detail/${products.id}`} className="flex flex-col p-3 ">
      <div className="w-full h-auto p-9">
        <img src={products.image} alt="" className="w-full  h-[280px]  " />
      </div>
      <h1 className="text-black font-semibold ml-9">{products.name}</h1>
      <div className="flex justify-between">
        <span className="text-[#777777] ml-9">{products.category}</span>{" "}
        <span className="mr-10">${products.price}</span>
      </div>
    </Link>
  );
};

export default ProductItem;
