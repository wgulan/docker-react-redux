import { ARCHIVIZE_COMPLETED_TODO } from "../actionTypes/todoArchiveTypes";
import { ARCHIVIZE_EXPIRED_TODO } from "../actionTypes/todoArchiveTypes";

const initialState = [
    {
        id: 0.988964630814328,
        text: "Test4",
        date: "15.04.2021",
        time: "18:23",
        completed: true,
        deadline: "2021-04-15T16:23:00.000Z",
        expired: false,
    },
];

const todoArchiveReducer = (state = initialState, action) => {
    switch (action.type) {
        case ARCHIVIZE_COMPLETED_TODO:
            return [...state, { ...action.payload }];

        case ARCHIVIZE_EXPIRED_TODO:
            return [...state, { ...action.payload }];

        default:
            return state;
    }
};

export default todoArchiveReducer;
