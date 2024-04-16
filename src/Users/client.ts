import axios from "axios";
export const BASE_API = process.env.REACT_APP_API_BASE;
export const USERS_API = `${BASE_API}/api/users`;

const api = axios.create({
    withCredentials: true
})
export interface User {
    _id: string, username: string; password: string; role: string;
    firstName: string, lastName: string
};

export const signin = async (credentials: User) => {
    const response = await api.post(`${USERS_API}/signin`, credentials);
    localStorage.setItem('token', response.data.token);
    return response.data;
};

export const profile = async () => {
    const token = localStorage.getItem('token');
    const response = await axios.post(`${USERS_API}/profile`, null, {headers: { 'Authorization': `Bearer ${token}`,}});
    return response.data;
};

export const updateUser = async (user: any) => {
    const token = localStorage.getItem('token');
    const response = await api.put(`${USERS_API}/${user._id}`, user, {headers: { 'Authorization': `Bearer ${token}`,}});
    return response.data;
};

export const findAllUsers = async () => {
    const token = localStorage.getItem('token');
    const response = await api.get(`${USERS_API}`, {headers: { 'Authorization': `Bearer ${token}`,}});
    return response.data;
};

export const createUser = async (user: any) => {
    const response = await api.post(`${USERS_API}`, user);
    return response.data;
};

export const deleteUser = async (user: any) => {
    const token = localStorage.getItem('token');
    const response = await api.delete(
        `${USERS_API}/${user._id}`, {headers: { 'Authorization': `Bearer ${token}`,}});
    return response.data;
};

export const findUserById = async (id: string) => {
    const token = localStorage.getItem('token');
    const response = await api.get(`${USERS_API}/${id}`, {headers: { 'Authorization': `Bearer ${token}`,}});
    return response.data;
};

export const findUsersByRole = async (role: string) => {
    const token = localStorage.getItem('token');
    const response = await
        api.get(`${USERS_API}?role=${role}`, {headers: { 'Authorization': `Bearer ${token}`,}});
    return response.data;
};

export const signup = async (user: any) => {
    const response = await api.post(`${USERS_API}/signup`, user);
    return response.data;
};

export const signout = async () => {
    localStorage.removeItem('token')
};
