import React from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

const TodoArchive = (props) => {

    return (
        <div>
            <h1>TODOS ARCHIVE</h1>

            {props.todos
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
                    />
                ))}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.archive,
    };
};


export default connect(mapStateToProps)(TodoArchive);
