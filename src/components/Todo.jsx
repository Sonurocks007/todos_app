import React from 'react'
import { FaRegEdit } from "react-icons/fa";
import { MdAutoDelete } from "react-icons/md";

const Todo = ({todo,editTodo,deleteTodo,toggleComplete}) => {
  return (
    <div className='flex justify-between items-center bg-white rounded px-4 py-2'>
    <p 
    onClick={()=>toggleComplete(todo.id)}
    className={`cursor-pointer width-full ${todo.completed? "line-through text-gray-600":"text-black"}`}
    >{todo.task}</p>
    <div className="flex gap-2 ml-2">
            <FaRegEdit
              onClick={() => editTodo(todo.id)}
              className="text-blue-600 cursor-pointer"
            />
            <MdAutoDelete
              onClick={() => deleteTodo(todo.id)}
              className="text-red-600 cursor-pointer"
            />
          </div>
    </div>
  )
}

export default Todo