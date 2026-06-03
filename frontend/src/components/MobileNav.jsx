import React from 'react';

const navItems = [
  { id: 'Today', icon: 'today' },
  { id: 'Scheduled', icon: 'calendar_month' },
  { id: 'All', icon: 'list_alt' },
  { id: 'Flagged', icon: 'flag' },
  { id: 'Completed', icon: 'task_alt' }
];

const MobileNav = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-center items-center p-stack-md z-50 bg-background/95 backdrop-blur-md border-t border-outline-variant rounded-t-xl pb-[24px] pt-[16px] shadow-lg">
      <ul className="flex justify-around w-full max-w-md">
        {navItems.slice(0, 4).map(item => { // Show first 4 on mobile
          const isActive = activeTab === item.id;
          return (
            <li key={item.id}>
              <button 
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 cursor-pointer ${isActive ? 'text-primary' : 'text-on-surface-variant hover:text-on-background transition-colors'}`}
              >
                <div className={`px-5 py-1.5 flex items-center justify-center rounded-full ${isActive ? 'bg-primary text-[#002a77]' : ''}`}>
                  <span className="material-symbols-outlined" style={{fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0"}}>{item.icon}</span>
                </div>
                <span className="text-label-sm mt-1">{item.id}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileNav;
