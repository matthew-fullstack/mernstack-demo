import axios, { AxiosResponse } from "axios";
import { request } from "http";
import { ILoginFormValues } from "../models/loginFormValues";

axios.defaults.baseURL = "http://localhost:3001/api";

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }

    return config;
  },
  (error) =>
    Promise.reject(error)
)

// Adding delay for local
const sleepDuration = 500;
const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) =>
    axios.get(url).then(sleep(sleepDuration)).then(responseBody),
  post: (url: string, body: {}) =>
    axios.post(url, body).then(sleep(sleepDuration)).then(responseBody),
  put: (url: string, body: {}) =>
    axios.put(url, body).then(sleep(sleepDuration)).then(responseBody),
  delete: (url: string) =>
    axios.delete(url).then(sleep(sleepDuration)).then(responseBody),
};

const User = {
  login: (formValues: ILoginFormValues) =>
    requests.post("/user/login", formValues),
};

const agent = {
  User,
};

export default agent;
