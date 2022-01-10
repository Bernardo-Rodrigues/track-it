import axios from "axios";
const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

export function SignUp(body) {
    const promise = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return promise;
}

export function SignIn(body) {
    const promise = axios.post(`${BASE_URL}/auth/login`, body);
    return promise;
}

export function ListHabits(headers) {
    const promise = axios.get(`${BASE_URL}/habits`, headers);
    return promise;
}

export function NewHabit(body, headers) {
    const promise = axios.post(`${BASE_URL}/habits`, body, headers);
    return promise;
}

export function DeleteHabit(habitId, headers) {
    const promise = axios.delete(`${BASE_URL}/habits/${habitId}`, headers);
    return promise;
}

export function TodayHabits(headers) {
    const promise = axios.get(`${BASE_URL}/habits/today`, headers);
    return promise;
}

export function CheckHabit(habitId, headers) {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/check`, {}, headers);
    return promise;
}

export function UncheckHabit(habitId, headers) {
    const promise = axios.post(`${BASE_URL}/habits/${habitId}/uncheck`,{}, headers);
    return promise;
}

export function History(headers) {
    const promise = axios.get(`${BASE_URL}/habits/history/daily`, headers);
    return promise;
}
  