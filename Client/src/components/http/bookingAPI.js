import {$authHost} from "./index";

export const getBooking = async () => {
    const response = await $authHost.get("/api/booking");
    return response.data;
}

export const getHalls = async () => {
    const response = await $authHost.get("/api/hall");
    return response.data;
}

export const createHall = async (data) => {
    const response = await $authHost.post("/api/hall", {"name": data});
    return response.data;
}

export const createBooking = async (data) => {
    const response = await $authHost.post("/api/booking", data);
    return response.data;
}

export const deleteBooking = async (id) => {
    const response = await $authHost.delete(`/api/booking/${id}`);
    return response.data;
}