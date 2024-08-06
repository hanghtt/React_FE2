import { Divider } from "@mui/material";
import { ReactElement } from "react";
import Slider from "react-slick";
// import useProductQuery from "../../../../hook/Product/useProductQuery";
import { IProduct } from "../../../../interface/product";
import {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../../components/CarouselSlider";
import ProductItem from "../../../../components/ProductItem";

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
  nextArrow: ReactElement;
  prevArrow: ReactElement;
}
type Props = {
  products: IProduct[];
};

const BestSellers = ({ products }: Props) => {
  // const { data: products } = useProductQuery();

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {/* <h3 className="w-[80%] mx-auto text-neutral-600 text-3xl font-normal font-['Baloo'] capitalize tracking-wide">
        Best Sellers
      </h3> */}
      <Divider />
      <div className="bg-white">
        <Slider {...settings}>
          {products?.map((products) => (
            <ProductItem key={products.id} products={products} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BestSellers;
