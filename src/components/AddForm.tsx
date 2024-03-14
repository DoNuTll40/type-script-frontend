
import { FormEvent, useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

function AddForm() {

  // const { onAddTodo } = useContext(TodoContext)
  const context = useContext(TodoContext)
  const onAddTodo = context?.onAddTodo;

  const [ todo_title, setTitle ] = useState<string>("");

  const hdlSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAddTodo?.({ todo_title })
    setTitle("")
  }

  return (
    <form onSubmit={hdlSubmit}>
      <div className="flex flex-row gap-x-3">
        <input onChange={ e => setTitle(e.target.value)} value={todo_title} className="border flex-1 rounded-md outline-none px-3 h-9 border-gray-300 focus:outline-2 focus:outline-blue-500 focus:outline-offset-1 focus:border-0" />
        <button className="h-9 bg-blue-500 text-white font-bold px-10 rounded-md active:scale-95">
          Add
        </button>
      </div>
    </form>
  );
}

export default AddForm;
