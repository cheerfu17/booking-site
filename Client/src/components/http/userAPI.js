import { $host, $authHost } from "./index";
import jwt_decode from "jwt-decode"
export const registration = async (name, email, password) => {
    const response = await $host.post("api/auth/sign_up", {name, email, password});
    localStorage.setItem("token", response.data);
    return jwt_decode(response.data);
} 

export const login = async (email, password) => {
    const response = await $host.post("api/auth/sign_in", {email, password});
    localStorage.setItem("token", response.data);
    return jwt_decode(response.data);
} 

export const check = async () => {
    const response = await $authHost.post("api/auth/check");
    localStorage.setItem("token", response.data);
    return jwt_decode(response.data);
} 