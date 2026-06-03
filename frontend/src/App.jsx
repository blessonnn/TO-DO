import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import MobileNav from './components/MobileNav';
import MainCanvas from './components/MainCanvas';
import FloatingActionButton from './components/FloatingActionButton';
import AddCategoryModal from './components/AddCategoryModal';
import SettingsModal from './components/SettingsModal';
import TuneModal from './components/TuneModal';

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeTab, setActiveTab] = useState('Today');
  
  // Custom categories state
  const [categories, setCategories] = useState([]);
  
  // Theme state
  const [theme, setTheme] = useState('dark');
  
  // Modal states
  const [isAddCategoryOpen, setIsAddCategoryOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isTuneOpen, setIsTuneOpen] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
  }, [theme]);

  const fetchTasks = async () => {
    try {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();
      setTasks(data);
    } catch (error) {
      console.error("Failed to fetch tasks", error);
    }
  };

  const addTask = async (title) => {
    try {
      // In a real app we'd pass categoryId here if we are on a category tab
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      });
      const newTask = await res.json();
      setTasks([newTask, ...tasks]);
    } catch (error) {
      console.error("Failed to add task", error);
    }
  };

  const toggleTask = async (id, isCompleted) => {
    try {
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isCompleted: !isCompleted })
      });
      const updatedTask = await res.json();
      setTasks(tasks.map(t => (t.id === id ? updatedTask : t)));
    } catch (error) {
      console.error("Failed to update task", error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' });
      setTasks(tasks.filter(t => t.id !== id));
    } catch (error) {
      console.error("Failed to delete task", error);
    }
  };

  const handleAddCategory = (name) => {
    setCategories([...categories, { id: name, name }]);
    setActiveTab(name);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        categories={categories}
        onAddCategoryClick={() => setIsAddCategoryOpen(true)}
      />
      <main className="flex-1 flex flex-col relative w-full">
        <TopHeader 
          activeTab={activeTab} 
          onSettingsClick={() => setIsSettingsOpen(true)}
          onTuneClick={() => setIsTuneOpen(true)}
        />
        <MainCanvas 
          tasks={tasks} 
          activeTab={activeTab}
          onAdd={addTask} 
          onToggle={toggleTask} 
          onDelete={deleteTask} 
        />
        <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>
      <FloatingActionButton />

      {/* Modals */}
      <AddCategoryModal 
        isOpen={isAddCategoryOpen} 
        onClose={() => setIsAddCategoryOpen(false)} 
        onAddCategory={handleAddCategory} 
      />
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        theme={theme}
        setTheme={setTheme}
      />
      <TuneModal 
        isOpen={isTuneOpen} 
        onClose={() => setIsTuneOpen(false)} 
      />
    </div>
  );
}

export default App;
