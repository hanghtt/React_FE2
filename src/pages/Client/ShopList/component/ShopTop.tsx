const ShopTop = () => {
  const ListData = [
    { image: "/public/images/Product/p5.png", name: "Chậu vuông" },
    { image: "/public/images/Product/p2.png", name: "Chậu tròn" },
    { image: "/public/images/Product/p3.png", name: "Đế lót" },
    { image: "/public/images/Product/p4.png", name: "Chậu cây" },
  ];
  return (
    <div className="w-[80%] mx-auto mt-7">
      <div className="flex flex-wrap justify-between gap-4">
        {ListData.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-center px-5 py-3 rounded-xl bg-[#D2E8CD] w-full sm:w-[48%] md:w-[23%]"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 object-cover"
            />
            <p className="text-stone-600 text-[15px] font-semibold font-['Open Sans'] capitalize">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopTop;
