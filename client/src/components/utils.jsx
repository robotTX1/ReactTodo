import axios from 'axios';

const url = "https://afflated-meridians.000webhostapp.com/server/";

export const allTodos = async () => {
    const response = await axios.get(url + "getTodos.php");
    return response;
}

export const addTodo = async ({newTodo}) => {
    const formData = new FormData();
    formData.append('text', newTodo);

    const config = {
        headers: {
            "Content-type": "multipart/form-data"
        }
    };

    const response = await axios.post(url + "addNewTodo.php", formData, config);
    return response;
}

export const deleteTodo = async ({id}) => {
    const response = await axios.delete(url + `deleteTodo.php?id=${id}`);
    return response;
}

export const updateTodo = async ({id, completed}) => {
    completed = completed === 1 ? 0 : 1;
    const response = await axios.get(url + `markTodo.php?id=${id}&completed=${completed}`);
    return response;
};
