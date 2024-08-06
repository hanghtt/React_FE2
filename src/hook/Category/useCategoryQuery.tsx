import { useQuery } from "@tanstack/react-query";

import { CategoryList, getIdCategory } from "../../service/category";

const useCategoryQuery = (id?: number | string) => {
  const { data, ...rest } = useQuery({
    queryKey: ["CATEGORY_KEY", id],
    queryFn: async () => {
      return id ? await getIdCategory(id) : await CategoryList();
    },
  });
  return { data, ...rest };
};
export default useCategoryQuery;
