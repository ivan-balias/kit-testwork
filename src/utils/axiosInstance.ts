import axios, { AxiosResponse } from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com',
})

const apiGet = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return await axiosInstance.get<T>(url)
}

const apiPost = async <T>(url:string, data: any): Promise<AxiosResponse<T>> => {
  return await axiosInstance.post<T>(url, data)
}

export { apiGet, apiPost };