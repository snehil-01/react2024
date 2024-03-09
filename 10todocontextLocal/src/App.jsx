import { useEffect, useState } from "react";
import "./App.css";
import { TodoContextProvider } from "./context/TodoContext";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length) setTodos(todos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    // const obj = {
    //   id: Date.now(),
    //   todo: todo,
    //   completed: false,
    // };
    // setTodos((prev) => {
    //   [...prev, obj];
    // });
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  };

  const updateTodo = (id, todo) => {
    /* let ind = -1;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == id) {
        ind = i;
        break;
      }
    }
    const obj = {
      id: Date.now(),
      todo: todo,
      completed: false,
    };
    const temp = [...todos];
    setTodos(temp.splice(ind, 1, obj));*/
    setTodos((prev) => {
      return prev.map((prevTodo) => {
        return prevTodo.id === id ? todo : prevTodo;
      });
    });
  };

  const deleteTodo = (id) => {
    // setTodos(todos.filter((item) => item.id != id));
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id != id));
  };

  const toggleComplete = (id) => {
    // let ind = -1;
    // for (let i = 0; i < todos.length; i++) {
    //   if (todos[i].id == id) {
    //     ind = i;
    //     break;
    //   }
    // }
    // let flag = todos[ind].completed;
    // const obj = {
    //   ...todos[ind],
    //   completed: !flag,
    // };
    // const temp = [...todos];
    // setTodos(temp.splice(ind, 1, obj));
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };
  return (
    <TodoContextProvider
      value={{ addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
          {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  );
}

export default App;
