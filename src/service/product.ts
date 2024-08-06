import { toast } from "react-toastify";
import { axiosInstance } from "../config/axios";
import { IProduct } from "../interface/product";

export const getAllProducts = async () => {
  try {
    const { data } = await axiosInstance.get(`http://localhost:3000/products`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getProductById = async (id: number | string) => {
  try {
    const { data } = await axiosInstance.get(
      `http://localhost:3000/products/${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const createProduct = async (product: IProduct) => {
  try {
    const { data } = await axiosInstance.post(
      `http://localhost:3000/products`,
      product
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const updateProduct = async (product: IProduct) => {
  try {
    const { data } = await axiosInstance.put(
      `http://localhost:3000/products/${product.id}`,
      product
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = async (id: number | string) => {
  try {
    const { data } = await axiosInstance.delete(
      `http://localhost:3000/products/${id}`
    );
    toast.success("Xóa sản phẩm thành công");
    return data;
  } catch (error) {
    console.log(error);
  }
};
