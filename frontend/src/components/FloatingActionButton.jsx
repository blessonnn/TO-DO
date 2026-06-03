import React from 'react';

const FloatingActionButton = () => {
  return (
    <div className="fixed bottom-[100px] md:bottom-stack-lg right-stack-md md:right-stack-lg z-50">
      <button 
        onClick={() => {
          const input = document.querySelector('input[type="text"]');
          if (input) input.focus();
          else alert('New Task clicked');
        }}
        className="add-task-glow elevation-2 border border-outline-variant hover:border-primary text-on-background rounded-full py-3 px-5 flex items-center gap-3 transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
      >
        <span className="material-symbols-outlined text-primary group-hover:rotate-90 transition-transform duration-300">add</span>
        <span className="text-label-md pr-2">New Task</span>
      </button>
    </div>
  );
};

export default FloatingActionButton;
