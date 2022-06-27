import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "";

// for public get request (browse products), no authentication needed
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `${TOKEN}`}, // token required for user authentication
})