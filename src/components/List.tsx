
import { useContext } from "react"
import Listitem from "./Listitem"
import { TodoContext } from "../contexts/TodoContext"

function List() {

  // const { todos, onDeleteTodo } = useContext(TodoContext)
  const context = useContext(TodoContext)
  const todos = context?.todos
  const onDeleteTodo = context?.onDeleteTodo || (() => Promise.resolve())

  return (
    <div className="my-6 flex flex-col gap-y-3">
      {todos?.map( (el, index) => (
        <Listitem key={index} todos={el} onDelete={onDeleteTodo}/>        
      ) )}
    </div>
  )
}

export default List