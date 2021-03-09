import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions/todoListActions";

const TodoForm = (props) => {
    const [task, setTask] = useState({
        id: Math.random(),
        text: "",
        date: "",
        time: "",
        completed: false,
        deadline: "",
        expired: false,
    });

    const convertDate = (date) => {
        const convertedDate = date.split("-");
        return convertedDate.reverse().join(".");
    };

    const minTime = () => {
        // jeśli wybrano datę dzisiejszą, ustaw czas minimalny na obecny, jeśli datę późniejszą to brak ograniczeń
        const todayDate = new Date().toISOString().split("T")[0];
        if (task.date === todayDate) {
            const time = new Date().toLocaleTimeString().slice(0, -3);
            return time;
        } else return null;
    };

    const addDeadline = () => new Date(`${task.date} ${task.time}`); // nowy obiekt Date o wybranej dacie i czasie

    // HANDLERS
    const handleTextChange = (e) => setTask({ ...task, text: e.target.value });
    const handleDateChange = (e) => setTask({ ...task, date: e.target.value });
    const handleTimeChange = (e) => setTask({ ...task, time: e.target.value });
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo({
            ...task,
            text: task.text[0].toUpperCase() + task.text.slice(1),
            date: convertDate(task.date),
            deadline: addDeadline(),
        });
        setTask({
            id: Math.random(),
            text: "",
            date: "",
            time: "",
            completed: false,
            deadline: "",
            expired: false,
        });
    };

    return (
        <>
            <form className={"todo-form"} onSubmit={handleSubmit}>
                <input
                    required
                    type="text"
                    id="task"
                    name="task"
                    value={task.text}
                    placeholder={"zadanie"}
                    onChange={handleTextChange}
                />
                <input
                    required
                    type="date"
                    id="date"
                    name="date"
                    value={task.date}
                    onChange={handleDateChange}
                    min={new Date().toISOString().split("T")[0]}
                />
                <input
                    required
                    type="time"
                    id="time"
                    name="time"
                    value={task.time}
                    onChange={handleTimeChange}
                    min={minTime()}
                />
                <button>+</button>
            </form>
        </>
    );
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (task) => dispatch(addTodo(task)),
    };
};

export default connect(null, mapDispatchToProps)(TodoForm);
