import React, { useState } from 'react';

const InputBar = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title.trim());
      setTitle('');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex items-center gap-gutter bg-bg-lowest border border-outline-variant p-2 pl-4 rounded-xl elevation-2 interactive-hover focus-within:border-accent"
    >
      <input 
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 bg-transparent text-on-background placeholder:text-outline outline-none text-body-lg"
      />
      <button 
        type="submit" 
        className="w-10 h-10 flex items-center justify-center bg-accent text-white rounded-lg hover:scale-105 active:scale-95 transition-transform add-task-glow cursor-pointer"
      >
        <span className="material-symbols-outlined text-sm">add</span>
      </button>
    </form>
  );
};

export default InputBar;
