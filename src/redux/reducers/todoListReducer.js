import {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO,
    EXPIRE_TODO,
} from "../actionTypes/todoListTypes";
import { ARCHIVIZE_COMPLETED_TODO, ARCHIVIZE_EXPIRED_TODO } from "../actionTypes/todoArchiveTypes";

const initialState = [
    {
        id: 0.988964630814328,
        text: "Test3",
        date: "15.04.2021",
        time: "18:23",
        completed: false,
        deadline: "2021-04-15T16:23:00.000Z",
        expired: false,
    },
    {
        id: 0.13050220124834067,
        text: "Test2",
        date: "30.11.2020",
        time: "14:00",
        completed: false,
        deadline: "2020-11-30T13:00:00.000Z",
        expired: false,
    },
    {
        id: 0.09304550064985306,
        text: "Test1",
        date: "27.11.2020",
        time: "08:00",
        completed: false,
        deadline: "2020-11-27T07:00:00.000Z",
        expired: false,
    },
];

const todoReducer = (state = null, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...action.payload,
            };
        case COMPLETE_TODO:
            if (state.id === action.payload.id) {
                return {
                    ...state,
                    completed: !state.completed,
                };
            }
            return state;
        case EXPIRE_TODO:
            if (state.id === action.payload.id) {
                return {
                    ...state,
                    expired: true,
                };
            }
            return state;

        default:
            return state;
    }
};

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [todoReducer(undefined, action), ...state];

        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload.id);

        case COMPLETE_TODO:
            return state.map((todo) => todoReducer(todo, action));

        case EXPIRE_TODO:
            return state.map((todo) => todoReducer(todo, action));

        case ARCHIVIZE_COMPLETED_TODO:
            return state.filter((todo) => todo.id !== action.payload.id);

        case ARCHIVIZE_EXPIRED_TODO:
            return state.filter((todo) => todo.id !== action.payload.id);

        default:
            return state;
    }
};

export default todoListReducer;
