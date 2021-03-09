import React from 'react';

const Todo = (props) => {

    const todoStyle = {
        backgroundColor: props.completed 
            ? '#78ffb2' 
            : (props.expired 
                ? "#ff6363" 
                : '#f0f0f0'),
    }
    
    return (
        <div className={'todo-el'} style={todoStyle}>
            <div className={'task'}>
                <div>{props.index}.</div>
                <div>{props.text}</div>
                <div>{props.date}</div>
                <div>{props.time}</div>
            </div>
            <div>
                <button style={{backgroundColor: '#ff5724'}} disabled={props.expired || props.completed} onClick={props.onDelete}>✖</button>
                <button style={{backgroundColor: '#45ff95'}} disabled={props.expired || props.completed} onClick={props.toggleComplete}>✔</button>
            </div>
        </div>
    );
};

export default Todo;
