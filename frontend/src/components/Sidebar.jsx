import React from 'react';

const navItems = [
  { id: 'Today', icon: 'today' },
  { id: 'Scheduled', icon: 'calendar_month' },
  { id: 'All', icon: 'list_alt' },
  { id: 'Flagged', icon: 'flag' },
  { id: 'Completed', icon: 'task_alt' }
];

const Sidebar = ({ activeTab, setActiveTab, categories, onAddCategoryClick }) => {
  return (
    <nav className="hidden md:flex bg-background border-r border-outline-variant h-screen w-64 flex-col py-stack-lg sticky top-0 shrink-0">
      <div className="px-stack-md mb-stack-lg flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-bg-lowest border border-outline-variant flex items-center justify-center overflow-hidden">
          <img alt="User profile" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Bleson&background=3874ff&color=fff"/>
        </div>
        <div>
          <h2 className="text-headline-md text-primary">Bleson</h2>
          <p className="text-label-sm text-on-surface-variant">Power User</p>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto px-unit custom-scrollbar">
        <ul className="flex flex-col gap-1">
          {navItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <li key={item.id}>
                <button 
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-stack-sm px-stack-md py-3 rounded-lg duration-200 ease-in-out cursor-pointer ${
                    isActive 
                    ? 'bg-bg-lowest text-primary border-r-2 border-primary font-bold' 
                    : 'text-on-surface-variant hover:bg-bg-lowest hover:text-on-background font-medium'
                  }`}
                >
                  <span className="material-symbols-outlined" style={{fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"}}>{item.icon}</span>
                  <span className="text-label-md">{item.id}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {categories && categories.length > 0 && (
          <div className="mt-8">
            <h3 className="px-stack-md text-label-sm text-on-surface-variant uppercase tracking-wider mb-2">Lists</h3>
            <ul className="flex flex-col gap-1">
              {categories.map(cat => {
                const isActive = activeTab === cat.id;
                return (
                  <li key={cat.id}>
                    <button 
                      onClick={() => setActiveTab(cat.id)}
                      className={`w-full flex items-center gap-stack-sm px-stack-md py-3 rounded-lg duration-200 ease-in-out cursor-pointer ${
                        isActive 
                        ? 'bg-[#121214] text-primary border-r-2 border-primary font-bold' 
                        : 'text-on-surface-variant hover:bg-[#121214] hover:text-on-background font-medium'
                      }`}
                    >
                      <span className="material-symbols-outlined" style={{fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"}}>folder</span>
                      <span className="text-label-md">{cat.name}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="px-stack-md mt-auto pt-4 border-t border-outline-variant">
        <button 
          onClick={onAddCategoryClick}
          className="w-full flex items-center justify-center gap-2 py-3 bg-bg-lowest hover:opacity-80 text-on-background rounded-lg text-label-md transition-colors duration-200 cursor-pointer border border-outline-variant"
        >
          <span className="material-symbols-outlined text-sm">add</span>
          Add Category
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
