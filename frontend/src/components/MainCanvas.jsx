import React from 'react';
import InputBar from './InputBar';
import TaskRowItem from './TaskRowItem';
import { AnimatePresence } from 'framer-motion';

const MainCanvas = ({ tasks, activeTab, onAdd, onToggle, onDelete }) => {
  // Filter tasks based on activeTab
  let filteredTasks = tasks;
  if (activeTab === 'Today') {
    filteredTasks = tasks.filter(t => !t.isCompleted);
  } else if (activeTab === 'Completed') {
    filteredTasks = tasks.filter(t => t.isCompleted);
  } else if (activeTab === 'Flagged') {
    filteredTasks = []; // placeholder, assuming no flag property
  } else if (activeTab === 'Scheduled') {
    filteredTasks = tasks; // placeholder
  }

  const activeTasks = filteredTasks.filter(t => !t.isCompleted);
  const completedTasks = filteredTasks.filter(t => t.isCompleted);

  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  const todayString = new Date().toLocaleDateString('en-US', options);

  return (
    <div className="px-container-padding-mobile md:px-container-padding-desktop pb-[120px] pt-stack-lg flex-1 w-full max-w-[1200px] mx-auto">
      {/* Date Context */}
      <div className="mb-stack-lg">
        <p className="text-body-lg text-on-surface-variant">{todayString}</p>
        <div className="flex items-center gap-stack-sm mt-stack-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-label-sm text-primary uppercase tracking-wider">{activeTasks.length} {activeTasks.length === 1 ? 'task' : 'tasks'} {activeTab === 'Completed' ? 'completed' : 'remaining'}</span>
        </div>
      </div>

      {/* Task Group */}
      <div className="flex flex-col gap-stack-sm w-full">
        {activeTab !== 'Completed' && <InputBar onAdd={onAdd} />}
        
        <div className="mt-stack-md flex flex-col gap-stack-sm">
          <AnimatePresence>
            {activeTasks.map(task => (
              <TaskRowItem 
                key={task.id} 
                task={task} 
                onToggle={() => onToggle(task.id, task.isCompleted)} 
                onDelete={() => onDelete(task.id)} 
              />
            ))}
          </AnimatePresence>
        </div>

        {completedTasks.length > 0 && (
          <>
            {/* Completed Divider */}
            <div className="flex items-center gap-gutter my-stack-md opacity-50">
              <div className="h-[1px] bg-outline-variant flex-1"></div>
              <span className="text-label-sm text-on-surface-variant uppercase tracking-wider">Completed</span>
              <div className="h-[1px] bg-outline-variant flex-1"></div>
            </div>
            
            <div className="flex flex-col gap-stack-sm">
              <AnimatePresence>
                {completedTasks.map(task => (
                  <TaskRowItem 
                    key={task.id} 
                    task={task} 
                    onToggle={() => onToggle(task.id, task.isCompleted)} 
                    onDelete={() => onDelete(task.id)} 
                  />
                ))}
              </AnimatePresence>
            </div>
          </>
        )}
        
        {filteredTasks.length === 0 && activeTab !== 'Today' && activeTab !== 'All' && (
           <div className="text-center py-section-gap opacity-50">
             <p className="text-on-background text-body-lg">No tasks found for {activeTab}.</p>
           </div>
        )}
      </div>
    </div>
  );
};

export default MainCanvas;
