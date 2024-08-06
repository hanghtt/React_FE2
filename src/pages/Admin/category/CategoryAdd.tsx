import useCategoryMutation from "../../../hook/Category/useCategoryMutation";

const CategoryProduct = () => {
  const { form, onSubmit, isPending } = useCategoryMutation({
    action: "CREATE",
  });
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Thêm danh mục</h1>
        </div>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mx-auto mb-0 mt-8 max-w-md space-y-4"
        >
          <div>
            <label htmlFor="category" className="font-bold">Name</label>

            <div className="relative">
              <input
                type="text"
                className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Tên danh mục"
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
              {isPending ? "Creating..." : "Thêm"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CategoryProduct;
