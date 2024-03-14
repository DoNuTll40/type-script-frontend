
import { Todo } from "../@types/todo.type";

interface ListitemProps {
  todos: Todo;
  onDelete: (todo_id: number) => Promise<void>;
}

function Listitem({ todos, onDelete }: ListitemProps) {

  const hdlDelete = (id: number) => {
    onDelete(id);
  }

  return (
    <div className="flex justify-between bg-white h-14 border border-gray-300 items-center px-5 rounded-md">
      <div>{todos.todo_title}</div>
      <div>
        <button
          type="button"
          onClick={ () => hdlDelete(todos.todo_id)}
          className="bg-red-500 text-white font-bold px-5 py-2 rounded-md active:scale-95">
          Delete
        </button>
      </div>
    </div>
  );
}

export default Listitem;
