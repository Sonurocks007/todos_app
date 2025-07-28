import React, { useState } from 'react'

const EditTodo = ({todo,editTodo}) => {
  const[value,setValue]=useState("");
  const handleSubmit=(e)=>{

    e.preventDefault();
    editTodo(value,todo.id);
    setValue("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type='text'
          className="border bg-zinc-100 text-black border-zinc-300 text-center rounded px-6 py-2 w-[300px] h-[40px]"
          value={value}
          onChange={(e)=>setValue(e.target.value)}
        />
        <button type='submit' className="bg-indigo-600 text-white px-4 py-2 h-[40px] w-[150px] rounded hover:bg-blue-700 transition duration-300">Update Task</button>
      </form>
    </div>
  )
}

export default EditTodo