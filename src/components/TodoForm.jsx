import React from 'react'
import { useState } from 'react'


const TodoForm = ({addTodos}) => {
    const[value,setValue] = useState("")
    const handleSubmit = (e)=>{
        console.log("Submitted task:", value);
        e.preventDefault();
        addTodos(value);
       console.log("value is submitting");
       
        
        setValue("");
    }
  return (
    <div>
       <form onSubmit={handleSubmit} className="flex flex-row w-full gap-2" >
         <input
            className='border bg-zinc-100 text-black border-zinc-300 text-start rounded px-6 py-2 w-[300px] h-[40px]'
            type='text'
            value={value}
            placeholder="Enter today's task!!"
            onChange={(e)=>setValue(e.target.value)}
        />
        <button type='submit' className="bg-[#fdba74] hover:bg-[#fb923c] text-white px-4 py-2 h-[40px] w-[150px] rounded  transition duration-300">Add Task</button>
       </form>
    </div>
  )
}

export default TodoForm