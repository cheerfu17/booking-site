import { $host, $authHost } from "./index";

export const getBooking = async () => {
    const response = await $authHost.get("/api/booking");
    
    return response.data;
}

export const getHalls = async () => {
    const response = await $authHost.get("/api/hall");
    return response.data;
}