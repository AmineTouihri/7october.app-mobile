import api from "./index";
import { Product } from "../models/Product";



export const fetchProducts = async (): Promise<Product[]> => {
  const response = await api.get(`/product/get-all`);
  return response.data;
};

export const addProduct = async (newProduct: Partial<Product>) => {
  const response = await api.post("/products", newProduct);
  return response.data;
};

export const deleteProduct = async (productId: string) => {
  const response = await api.delete(`/products/${productId}`);
  return response.data;
};

export const fetchAlternativeProducts = async (): Promise<Product[]> => {
  const response = await api.get("/alternatives/get-all");
  return response.data;
}


export const checkProduct = async (barcode: string) => {
  const response = await api.get(`YOUR_API_ENDPOINT?barcode=${barcode}`);
  return response.data();
};
