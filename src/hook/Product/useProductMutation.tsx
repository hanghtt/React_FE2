import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IProduct } from "../../interface/product";
import {
  createProduct,
  deleteProduct,
  updateProduct,
} from "../../service/product";
type useProductMutationProps = {
  action: "CREATE" | "UPDATE" | "DELETE";
};
type Inputs = {
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  short_desc: string;
  about: string;
};
const useProductMutation = ({ action }: useProductMutationProps) => {
  const form = useForm<Inputs>({
    defaultValues: {
      name: "",
      category: "",
      price: 0,
      image: "",
      description: "",
      short_desc: "",
      about: ""
    },
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, ...rest } = useMutation({
    mutationFn: async (product: IProduct) => {
      switch (action) {
        case "CREATE":
          await createProduct(product);
          navigate("/admin/products/list");
          toast.success("Thêm sản phẩm thành công");
          break;
        case "UPDATE":
          await updateProduct(product);
          navigate("/admin/products/list");
          toast.success("Cập nhật sản phẩm thành công");
          break;
        case "DELETE":
          await deleteProduct(product.id!);
          // toast.success("Xóa sản phẩm thành công");
          break;
        default:
          return null;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["PRODUCT_KEY"],
      });
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (product) => {
    mutate(product);
  };

  return { mutate, form, onSubmit, ...rest };
};
export default useProductMutation;
