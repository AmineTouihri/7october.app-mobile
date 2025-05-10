import { Category } from "../models/Category";
import api from ".";



export const fetchCategories = async (): Promise<Category[]> => {
  const response = await api.get("/category/get-all");
  return response.data;
};
