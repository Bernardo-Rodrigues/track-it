import axios from "axios";
const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

export function signUp(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

export function signIn(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

export function listHabits(headers) {
    const promise = axios.get(`${BASE_URL}/habits`, headers);
    return promise;
}

export function newHabit(body, headers) {
    const promise = axios.post(`${BASE_URL}/habits`, body, headers);
    return promise;
}

export function deleteHabit(habitId, headers) {
    const promise = axios.delete(`${BASE_URL}/habits/${habitId}`, headers);
    return promise;
}

export function todayHabits(headers) {
    const promise = axios.get(`${BASE_URL}/habits/today`, headers);
    return promise;
}

export function checkHabit(habitId, headers) {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`, {}, headers);
    return promise;
}

export function uncheckHabit(habitId, headers) {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/uncheck`,{}, headers);
    return promise;
}

export function history(headers) {
    const promise = axios.get(`${BASE_URL}/habits/history/daily`, headers);
    return promise;
}
  