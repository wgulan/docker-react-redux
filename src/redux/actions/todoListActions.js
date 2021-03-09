import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    EXPIRE_TODO,
} from "../actionTypes/todoListTypes";

export const addTodo = (task) => {
    return {
        type: ADD_TODO,
        payload: {
            id: task.id,
            text: task.text,
            date: task.date,
            time: task.time,
            completed: task.completed,
            deadline: task.deadline,
            expired: task.expired,
        },
    };
};

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: {
            id,
        },
    };
};

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        payload: {
            id,
        },
    };
};

export const expireTodo = (id) => {
    return {
        type: EXPIRE_TODO,
        payload: {
            id,
        },
    };
};