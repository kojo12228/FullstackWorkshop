/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import Todo from "../Todo/Todo";
import "./Todos.css";
import useTodos from './useTodos'
import AddTodo from './AddTodo';

export default function Todos() {
  // Replace useState with useTodos
  // remove parameter (useTodos doesn't take a parameter)
  const [todos, setTodos] = useTodos();

  if (todos !== null) {
    return (
      <div className="Todos_container">
        {todos.map((todo, index) => (
          <Todo
            key={todo.label + index}
            todo={todo}
            onDelete={() => {
              setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
            }}
            onComplete={() => {
              setTodos([
                ...todos.slice(0, index),
                { ...todo, complete: !todo.complete },
                ...todos.slice(index + 1)
              ]);
            }}
            onDuplicate={() =>
              setTodos([
                ...todos.slice(0, index),
                { ...todo, complete: todo.complete },
                { ...todo, complete: todo.complete },
                ...todos.slice(index + 1)
              ])
            }
          />
        ))}
        <AddTodo onSubmit={(e) => {
          //let newTodos = todos.push({todo: e, complete: false})
          setTodos([...todos, {label: e, complete: false}])
        }}></AddTodo>
      </div>
    );
  }

  return <span>Waiting...</span>;
}
