// import { Category } from "@/interface/category";
// import { useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import useCategoryQuery from "../../../hook/Category/useCategoryQuery";
// import useProductQuery from "../../../hook/Product/useProductQuery";
import anh6 from "../../../image/AdobeStock_204287225_Preview 1.png";
import anh10 from "../../../image/bfdsA 1.png";
import anh9 from "../../../image/ffgdsa 1.png";
// import anh1 from "../../../image/fwfqq 1.png";
import anh8 from "../../../image/gggrrr 1.png";
import anh7 from "../../../image/gtgre 1.png";
// import { IProduct } from "../../../interface/product";
// import { Link } from "react-router-dom";
import Banner from "./component/Banner";
import BestSellers from "./component/BestSellers";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../../../interface/product";
import Kategorien from "./component/Kategorien";
import { Link } from "react-router-dom";
const Home = () => {
  // const { data: products } = useProductQuery();
  // const { data: categorys } = useCategoryQuery();

  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/products");
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <Banner />
      <div className="p-2 bg-[#F8F4F0]">
        <p className="font-baloo text-2xl mt-4 text-[#505F4E] ml-20">
          Sản phẩm bán chạy
        </p>
      </div>

      {/* Best Seller */}
      <BestSellers products={products} />

      {/* Ảnh Các Thứ */}
      <div className="bg-[#F5F5F5] flex space-x-5 justify-center py-20">
        <div className="relative inline-block group">
          <img src={anh6} alt="Garten Spaten" className="block" />
          <p className="transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1 ">
            Phân bón
          </p>
        </div>
        <div>
          <div className="relative group">
            <img src={anh7} alt="Sand" className="block" />
            <p className="transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1 ">
              Đất
            </p>
          </div>
          <div className="relative mt-3 group">
            <img src={anh8} alt="Schlammkuchen" className="block" />
            <p className=" transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1">
              Chân kê bồn cây
            </p>
          </div>
        </div>
        <div>
          <div className="relative group">
            <img src={anh9} alt="Pflanzer" className="block" />
            <p className=" transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1 ">
              Chậu cây
            </p>
          </div>
          <div className="relative mt-3 group">
            <img src={anh10} alt="Klemmen" className="block" />
            <p className=" transition-opacity duration-300 absolute top-2 w-full py-4 bg-white bg-opacity-50 text-black p-1 ">
              Dụng cụ uốn cây
            </p>
          </div>
        </div>
      </div>

      {/* Danh mục */}
      <Link to={`/category/${products.id}`} className="font-baloo text-2xl text-[#505F4E] bg-[#F5F5F5] pl-20">
        Danh mục
      </Link>
      <hr className="bg-[#F5F5F5] w-full mx-auto hidden md:block" />
      {/* <div className="bg-[#F5F5F5] pt-10">
        <div className=" grid grid-cols-4 justify-between ml-14">
          {categorys?.map((category: Category) => (
            <div className="relative mt-6" key={category.id}>
              <img
                src={category.image}
                alt="Beleuchtung"
                className="block ml-2"
              />
              <div className="absolute inset-0 ml-48 mb-72 flex flex-col justify-center bg-opacity-50">
                <p className="text-white text-lg">{category.name}</p>
                <span className="text-white text-sm">30 items</span>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <Kategorien />
    </div>
  );
};
export default Home;
