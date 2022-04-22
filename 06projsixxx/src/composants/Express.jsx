import axios from "axios";

const url = "http://localhost:3003/"

export const get = path => {
    return axios.get(url + path);
}

export const post = (path, data) => {
    return axios.post(url + path, data);
}

export const supprimeTodo = (path, id) => {
    console.log(id)
    console.log(path)
    return axios.delete(url + path + id);
}