import { useState } from "react";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleEventClick = (event) => {
    if (!value) {
      return;
    }

    let newTodo = {
      id: Math.floor(Math.random() * 100000 + 1),
      title: value,
    };
    setTodos([...todos, newTodo]);
    setValue("");
  };

  const handleOnchangeInput = (event) => {
    setValue(event.target.value);
  };

  const deleteDataTodo = (id) => {
    let currentTodos = todos;
    currentTodos = currentTodos.filter((item) => item.id !== id);
    setTodos(currentTodos);
  };

  const handleDelete = (id) => {
    deleteDataTodo(id);
  };
  return (
    <>
      <div className="todos-container">
        <div className="title">All Todo</div>
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <li className="todo-child">
                {todo.title}
                <span onClick={() => handleDelete(todo.id)}> x</span>
              </li>
            </div>
          );
        })}

        <hr />
      </div>
      <input
        type="text"
        value={value}
        onChange={(event) => handleOnchangeInput(event)}
      />
      <button type="button" onClick={(event) => handleEventClick(event)}>
        Click me
      </button>
    </>
  );
};

export default Todo;
