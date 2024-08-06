import { Category } from "@/interface/category";
import {
  CategoryAdd,
  deleteCategory,
  editCategory,
} from "../../service/category";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type useCategoryMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
};
type Inputs = {
  name: string;
  image: string;
};

const useCategoryMutation = ({ action }: useCategoryMutationProps) => {
  const form = useForm<Inputs>({
    defaultValues: {
      name: "",
      image: "",
    },
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (category: Category) => {
      switch (action) {
        case "CREATE":
          await CategoryAdd(category);
          navigate("/admin/listCategory");
          toast.success("Thêm danh mục thành công");
          break;
        case "UPDATE":
          await editCategory(category);
          navigate("/admin/listCategory");
          toast.success("Cập nhật danh mục thành công");
          break;
        case "DELETE":
          await deleteCategory(category.id!);
          toast.success("Xóa danh mục thành công");
          break;
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["CATEGORY_KEY"],
      });
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (category) => {
    mutate(category);
  };
  return { mutate, form, onSubmit, ...rest };
};

export default useCategoryMutation;
