import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponce<T>{
    data:T[],
    success:boolean,
    message:string
}

export interface ServiceResponce<T>{
    data:T,
    success:boolean,
    message:string
}

export const axiosInstance = axios.create({
    baseURL: 'https://localhost:44357/api'
    }
);

class APIClient<T> {
    endpoint:string;

    constructor(endpoint:string){
        this.endpoint = endpoint
}

getStats = (id:string) => {
    return axiosInstance.get<ServiceResponce<T>>(this.endpoint+'/'+id)
    .then(res=>res.data);
}


 getAll = (config:AxiosRequestConfig) => {
    return axiosInstance.get<FetchResponce<T>>(this.endpoint,config)
    .then(res=>res.data);
 };

 get = (id:number| string)=> {
    return axiosInstance.get<FetchResponce<T>>(this.endpoint + '/' + id)
    .then(res=>res.data);
 };

}

export default APIClient;