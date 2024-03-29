
import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { Todo } from "../@types/todo.type";
import axios from "../configs/axios";

interface TodoContextValue {
  todos: Todo[];
  onAddTodo: (todos: Partial<Todo>) => Promise<void>;
  onDeleteTodo: (todo_id: Number) => Promise<void>;
}

export const TodoContext = createContext<TodoContextValue | null>(null);

interface TodoContextProps {
  children: ReactNode;
}

function TodoContextProvider({ children }: TodoContextProps) {

  const [todos, setTodos] = useState<Todo[]>([]);

  const fetchTodos = async () => {
    try {
      const res = await axios.get("/todo");
      setTodos(res.data.todos);
    } catch (err) {
      console.log(err);
      alert("Fetch unsuccess!");
    }
  };

  const onAddTodo = async (todos: Partial<Todo>) => {
    if (!todos.todo_title) {
      return alert("Title is required");
    }
    await axios.post("/todo", todos);

    fetchTodos();
  };

  const onDeleteTodo = async (todo_id: Number) => {
    await axios.delete(`/todo/${todo_id}`);
    fetchTodos();
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const value = { todos, onAddTodo, onDeleteTodo }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoContextProvider;

export const useTodo = () => {
    const ctx = useContext(TodoContext)
    if(!ctx){
      throw new Error("useTodo mist be used with in a TodoContextProvider")
    }
    return ctx
}
