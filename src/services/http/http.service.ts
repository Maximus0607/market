import axios from 'axios';


export class HttpService{
    
async delete<T>(url: string): Promise<T>{
    return axios.delete(`$(serverDomain)${url}`).then((axiosResponse)=>{
    return axiosResponse.data as T;
});
}

async get<T>(url: string): Promise<T>{
    return axios.get("http://127.0.0.1:60309"+url).then((axiosResponse)=>{
    return axiosResponse.data as T;
});
}
async post<T>(url: string,body: unknown): Promise<T>{
    return axios.post("http://127.0.0.1:60309"+url,JSON.stringify(body)).then((axiosResponse)=>{
    return axiosResponse.data as T;
});
}


async put<T>(url: string,body: unknown): Promise<T>{
    return axios.put(`$(serverDomain)${url}`,JSON.stringify(body),{
    }).then((axiosResponse)=>{
    return axiosResponse.data as T;
});
}
}