import React from "react";

const SearchForm = ({ searchTodo, setSearchTodo }) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-row w-full gap-2 py-2">
        <input
          type="text"
          value={searchTodo}
          onChange={(e) => setSearchTodo(e.target.value)}
          placeholder="Search your tasks..."
          className="border bg-zinc-100  text-black border-zinc-300 text-start rounded px-6 py-1 w-[300px] h-[40px]"
        />
      </form>
    </div>
  );
};

export default SearchForm;
