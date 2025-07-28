import React, { useState } from 'react'

const UseTodos = () => {

    const[todos,setTodos]=useState([]);
    const[nextId,setNextId] = useState(0);
    const[searchTodo,setSearchTodo] = useState("");
    const addTodos = (task)=>{
        console.log("Adding Task:", task);
        setTodos([...todos ,{id:nextId,task,completed:false,isEditing:false}])
        setNextId(nextId+1);
    }

    const deleteTodo = (id)=>{
        setTodos(todos.filter((todo)=>todo.id !== id ));
    }

    const toggleComplete=(id)=>{
        setTodos(todos.map((todo)=>
            todo.id===id?{...todo,completed:!todo.completed}:todo));
    }

    const editTodo=(id)=>{
        setTodos(todos.map((todo)=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo));
    }
    const editTask=(task,id)=>{
        setTodos(todos.map((todo)=>todo.id ===id?{...todo,task,isEditing:!todo.isEditing}:todo))
    }
    
    const searchTodoItem = todos.filter((todo) =>
  todo.task.toLowerCase().includes(searchTodo.toLowerCase())
);


    
  return {
    todos,
    addTodos,
    deleteTodo,
    editTask,
    editTodo,
    toggleComplete,
    searchTodo,
    setSearchTodo,
    searchTodoItem
  }
}

export default UseTodos