import { axiosInstance } from "../config/axios";
import { Category } from "../interface/category";

export const CategoryAdd = async (category: Category) => {
  try {
    const { data } = await axiosInstance.post(`/categorys`, category);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const CategoryList = async () => {
  try {
    const { data } = await axiosInstance.get(`/categorys`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const editCategory = async (category: Category) => {
  try {
    const { data } = await axiosInstance.put(
      `/categorys/${category.id}`,
      category
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const deleteCategory = async (id: number | string) => {
  try {
    const { data } = await axiosInstance.delete(`/categorys/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getIdCategory = async (id: number | string) => {
  try {
    const { data } = await axiosInstance.get(`/categorys/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
