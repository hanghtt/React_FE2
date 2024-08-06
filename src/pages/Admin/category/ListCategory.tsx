import { Link } from "react-router-dom";
import { Category } from "../../../interface/category";
import useCategoryQuery from "../../../hook/Category/useCategoryQuery";
import useCategoryMutation from "../../../hook/Category/useCategoryMutation";

const ListCategory = () => {
  const { data, isLoading } = useCategoryQuery();
  const { mutate } = useCategoryMutation({
    action: "DELETE",
  });
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      <div className="w-auto">
        <h1 className="text-center text-3xl font-bold">Quản Lý Danh Mục</h1>
        <div className="overflow-x-auto">
          <Link
            to="/admin/categorys/add"
            className="inline-block mr-[1010px] rounded bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700 mt-4 float-right mb-5"
          >
            Add Category
          </Link>
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white ">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                <th className=" px-4 py-2 font-medium text-black">STT</th>
                <th className=" px-4 py-2 font-medium text-black">
                  Ảnh danh mục
                </th>
                <th className=" px-4 py-2 font-medium text-black">
                  Tên danh mục
                </th>

                <th className="px-4 py-2 font-medium text-black"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-300">
              {data.map((item: Category) => (
                <tr key={item.id}>
                  <td className="text-center px-4 py-2 text-black ">
                    {item.id}
                  </td>
                  <td className="text-center px-4 py-2 text-black flex justify-center">
                    <img src={item.image} alt="" width="100" height="100" />
                  </td>
                  <td className="text-center px-4 py-2 text-black">
                    {item.name}
                  </td>

                  <td className="text-center whitespace-nowrap px-4 py-2">
                    <Link to={`/admin/categorys/edit/${item.id}`}>
                    <button className="bg-yellow-400 mr-2 px-2 rounded-lg text-white">
                      Edit
                    </button>
                    </Link>
                    <button
                      className="bg-red-500 px-2 rounded-lg text-white"
                      onClick={() => mutate(item)}
                    >
                        Del
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListCategory;
