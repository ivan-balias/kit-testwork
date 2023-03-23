import { apiGet } from '../utils/axiosInstance'
import { IProduct } from '../interfaces/product.interface'

export const getProducts = async (): Promise<IProduct[]> => {
  const products = await apiGet<IProduct[]>('/products')
  return products.data;
}