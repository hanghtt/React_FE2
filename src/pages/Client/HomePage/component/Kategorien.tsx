import { Category } from "../../../../interface/category";
import useCategoryQuery from "../../../../hook/Category/useCategoryQuery";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";

const Kategorien = () => {
  const { data } = useCategoryQuery();
  return (
    <div className="flex flex-col gap-12">
      {/* <h3 className="w-[80%] mx-auto text-neutral-600 text-3xl font-normal font-['Baloo'] leading-10">
        Kategorien
      </h3> */}
      <Divider />
      <div className="grid grid-cols-4  mx-auto gap-6 w-[80%]">
        {data?.map((item: Category, index: number) => (
          <div key={index} className=" relative rounded-xl">
            <img src={item.image} alt="" className="w-full h-full" />
            <div className="absolute w-[50%]  top-3  right-0 text-white flex flex-col z-10">
              <p className="font-semibold text-[18px]">{item.name}</p>
            </div>
            <div className="opacity-30 bg-neutral-900  shadow absolute top-0 right-0 w-full h-full" />
            
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Kategorien;
