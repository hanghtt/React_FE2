import { useParams } from "react-router-dom";
import useCategoryMutation from "../../../hook/Category/useCategoryMutation";
import { useEffect } from "react";
import useCategoryQuery from "../../../hook/Category/useCategoryQuery";

const CategoryEdit = () => {
  const { id } = useParams();
  const { data } = useCategoryQuery(id);
  const { form, onSubmit } = useCategoryMutation({
    action: "UPDATE",
  });
  useEffect(() => {
    form.reset(data);
  }, [id, form, data]);
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Cập nhật danh mục</h1>
        </div>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="name" className="font-bold">Name</label>
            <div className="relative">
              <input
                id="name"
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Enter category"
                {...form.register("name", { required: true })}
              />
              {form.formState.errors.name && (
                <span className="text-red-700 text-[12px]">
                  Tên danh mục không được bỏ trống
                </span>
              )}
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="productImage"
              className="block text-gray-700 font-bold mb-2"
            >
              Image
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              id="productImage"
              placeholder="Đường dẫn ảnh"
              {...form.register("image", {
                required: "Ảnh danh mục là bắt buộc",
              })}
            />
            {form.formState.errors.image && (
              <p className="text-red-500 text-sm">
                {form.formState.errors.image.message}
              </p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            >
              Cập nhật
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryEdit;
