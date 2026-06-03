import React from 'react';
import { motion } from 'framer-motion';

const TaskRowItem = ({ task, onToggle, onDelete }) => {
  if (task.isCompleted) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="bg-bg-lowest border border-transparent rounded-xl p-stack-md flex items-center gap-gutter opacity-40 group relative overflow-hidden"
      >
        <button 
          onClick={onToggle}
          className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full focus:outline-none cursor-pointer"
        >
          <span className="material-symbols-outlined text-primary" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
        </button>
        <div className="flex-1">
          <p className="text-body-lg text-on-surface line-through decoration-on-surface-variant">{task.title}</p>
        </div>
        <button 
          onClick={onDelete}
          className="text-outline hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none cursor-pointer"
        >
          <span className="material-symbols-outlined text-[18px]">delete</span>
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="elevation-1 rounded-xl p-stack-md flex items-center gap-gutter interactive-hover group relative overflow-hidden"
    >
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent opacity-50"></div>
      
      <button 
        onClick={onToggle}
        className="checkbox-container shrink-0 w-6 h-6 flex items-center justify-center rounded-full focus:outline-none cursor-pointer"
      >
        <div className="checkbox-ring w-5 h-5 rounded-full border border-outline-variant transition-colors duration-200 group-hover:border-primary"></div>
      </button>

      <div className="flex-1">
        <p className="text-body-lg text-on-background font-medium mb-[4px]">{task.title}</p>
      </div>

      <button 
        onClick={onDelete}
        className="text-outline hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none cursor-pointer"
      >
        <span className="material-symbols-outlined text-[18px]">delete</span>
      </button>
    </motion.div>
  );
};

export default TaskRowItem;
