import { apiGet } from '../utils/axiosInstance'
import { IProduct } from '../interfaces/product.interface'

export const getProduct = async (id: number) => {
  const product = await apiGet<IProduct>(`/products/${id}`);
  return product.data;
}