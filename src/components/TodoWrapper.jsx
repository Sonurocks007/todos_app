import React from "react";
import UseTodos from "./UseTodos";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import EditTodo from "./EditTodo";
import SearchForm from "./SearchForm";

const TodoWrapper = () => {
  const {
    todos,
    addTodos,
    deleteTodo,
    editTask,
    editTodo,
    toggleComplete,
    searchTodo,
    setSearchTodo,
    searchTodoItem,
  } = UseTodos();

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-[#fef6e4] to-[#fde2e4] flex justify-center items-center">
      <div className="bg-zinc-800 shadow-xl rounded-lg p-8 w-[500px] max-w-md h-[600px] overflow-y-auto">
        <h1 className="text-3xl font-bold text-zinc-100 text-center mb-4">
          To Do App
        </h1>

        <SearchForm searchTodo={searchTodo} setSearchTodo={setSearchTodo} />
        <TodoForm addTodos={addTodos} />

        <div className="mt-4 space-y-2 ">
        <h1 className="text-3xl font-bold text-zinc-100 text-center mb-4">
          Tasks
        </h1>
          {searchTodoItem.length === 0 ? (
            <p className="text-center text-white font-semibold">No Task Found</p>
          ) : (
            searchTodoItem.map((todo) =>
              todo.isEditing ? (
                <EditTodo key={todo.id} todo={todo} editTodo={editTask} />
              ) : (
                <Todo
                  key={todo.id}
                  todo={todo}
                  deleteTodo={deleteTodo}
                  editTodo={editTodo}
                  toggleComplete={toggleComplete}
                />
              )
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoWrapper;
