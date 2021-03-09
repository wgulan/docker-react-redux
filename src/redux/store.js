import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import todoListReducer from "./reducers/todoListReducer";
import todoArchiveReducer from "./reducers/todoArchiveReducer";

const rootReducer = combineReducers({ todos: todoListReducer, archive: todoArchiveReducer });

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()));

export default store;
