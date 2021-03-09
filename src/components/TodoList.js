import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { connect } from "react-redux";
import {
    deleteTodo,
    completeTodo,
    expireTodo,
} from "../redux/actions/todoListActions";
import TodosArchive from "./TodosArchive";
import { archivizeCompletedTodo, archivizeExpiredTodo } from "../redux/actions/todoArchiveActions";

const TodoList = (props) => {
    const [todosFilter, setTodosFilter] = useState("all");
    const [datetime, setDatetime] = useState(new Date());

    useEffect(() => {
        let timer = setInterval(() => {
            setDatetime(new Date());
        }, 5000);
        checkExpired();
        return () => clearInterval(timer);
    }, [datetime]);

    const checkExpired = () => {
        props.todos.map((todo) => {
            if (todo.deadline < datetime && !todo.expired && !todo.completed) {
                return props.toggleExpired(todo);
            } else return;
        });
    };

    return (
        <div>
            <h1>TODO APP</h1>
            <TodoForm />

            <select onChange={(e) => setTodosFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="todo">Todo</option>
                <option value="completed">Done</option>
                <option value="expired">Expired</option>
            </select>

            {props.todos
                .filter((todo) => {
                    if (todosFilter === "todo")
                        return !todo.expired && !todo.completed;
                    else if (todosFilter === "completed") return todo.completed;
                    else if (todosFilter === "expired") return todo.expired;
                    else return todo;
                })
                .map((todo, index) => (
                    <Todo
                        index={index + 1}
                        key={todo.id}
                        text={todo.text}
                        date={todo.date}
                        time={todo.time}
                        deadline={todo.deadline}
                        expired={todo.expired}
                        completed={todo.completed}
                        onDelete={() => props.onDelete(todo.id)}
                        toggleComplete={() => props.toggleComplete(todo)}
                    />
                ))}
            <TodosArchive />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(deleteTodo(id)),
        // toggleComplete: (id) => dispatch(completeTodo(id)),
        toggleComplete: (todo) => dispatch(archivizeCompletedTodo(todo)),
        toggleExpired: (todo) => dispatch(archivizeExpiredTodo(todo)),
        // toggleExpired: (id) => dispatch(expireTodo(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
