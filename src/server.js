import axios from "axios";

const API = "http://localhost:3001/users";

async function getData() {
    try {
        return await axios.get(API);
    } catch (error) {
        console.log(error)
    }
}


async function postData(obj) {
    try {
        await axios.post(API, obj)
    } catch (error) {
        console.log(error)
    }
}


async function deleteData(id) {
    try {
        // await axios.delete(`${API}/${id}`)
        await axios.delete(`http://localhost:3001/users/${id}`)
    } catch (error) {
        console.log(error)
    }
}


async function editData(id, obj) {
    try {
        await axios.put(`${API}/${id}`, obj)
    } catch (error) {
        console.log(error)
    }
}

export { getData, postData, deleteData, editData };