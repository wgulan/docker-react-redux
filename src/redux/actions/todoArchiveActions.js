import { ARCHIVIZE_COMPLETED_TODO } from "../actionTypes/todoArchiveTypes";
import { ARCHIVIZE_EXPIRED_TODO } from "../actionTypes/todoArchiveTypes";

export const archivizeCompletedTodo = (task) => {
    return {
        type: ARCHIVIZE_COMPLETED_TODO,
        payload: {
            id: task.id,
            text: task.text,
            date: task.date,
            time: task.time,
            completed: true,
            deadline: task.deadline,
            expired: task.expired,
        },
    };
};

export const archivizeExpiredTodo = (task) => {
    return {
        type: ARCHIVIZE_EXPIRED_TODO,
        payload: {
            id: task.id,
            text: task.text,
            date: task.date,
            time: task.time,
            completed: task.completed,
            deadline: task.deadline,
            expired: true,
        },
    };
};
