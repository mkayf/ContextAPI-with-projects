import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todo : 'todo msg',
            completed : false
        }
    ],
    addToDo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}