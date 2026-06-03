import React, { useState } from 'react';
import Modal from './Modal';

const SettingsModal = ({ isOpen, onClose, theme, setTheme }) => {
  const [notifications, setNotifications] = useState(true);
  const [compactMode, setCompactMode] = useState(false);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Settings">
      <div className="flex flex-col gap-stack-md">
        
        {/* Profile Section */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-bg-lowest border border-outline-variant">
           <div className="w-12 h-12 rounded-full bg-bg-lowest border border-outline-variant flex items-center justify-center overflow-hidden shrink-0">
             <img alt="User profile" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Bleson&background=3874ff&color=fff"/>
           </div>
           <div>
             <h3 className="text-body-lg text-on-background font-medium">Bleson</h3>
             <p className="text-label-sm text-on-surface-variant">bleson@example.com</p>
           </div>
           <button className="ml-auto px-3 py-1.5 rounded-lg border border-outline-variant text-label-sm hover:border-primary text-on-background transition-colors cursor-pointer">
             Edit
           </button>
        </div>

        {/* Toggles */}
        <div className="flex flex-col gap-2">
          <label className="flex justify-between items-center p-3 rounded-lg hover:bg-bg-lowest transition-colors cursor-pointer">
            <div>
              <p className="text-body-md text-on-background">Push Notifications</p>
              <p className="text-label-sm text-outline">Receive reminders for scheduled tasks</p>
            </div>
            <div className={`w-11 h-6 rounded-full flex items-center px-1 transition-colors ${notifications ? 'bg-primary' : 'bg-outline-variant'}`} onClick={() => setNotifications(!notifications)}>
              <div className={`w-4 h-4 bg-[#002a77] rounded-full transition-transform ${notifications ? 'translate-x-5 bg-[#002a77]' : 'bg-on-background'}`}></div>
            </div>
          </label>

          <label className="flex justify-between items-center p-3 rounded-lg hover:bg-bg-lowest transition-colors cursor-pointer">
            <div>
              <p className="text-body-md text-on-background">Compact Mode</p>
              <p className="text-label-sm text-outline">Reduce spacing for denser lists</p>
            </div>
            <div className={`w-11 h-6 rounded-full flex items-center px-1 transition-colors ${compactMode ? 'bg-primary' : 'bg-outline-variant'}`} onClick={() => setCompactMode(!compactMode)}>
              <div className={`w-4 h-4 rounded-full transition-transform ${compactMode ? 'translate-x-5 bg-[#002a77]' : 'bg-on-background'}`}></div>
            </div>
          </label>
        </div>

        {/* Appearance */}
        <div className="pt-4 border-t border-outline-variant">
           <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-3">Theme</p>
           <div className="grid grid-cols-2 gap-3">
             <div 
               onClick={() => setTheme('dark')}
               className={`flex items-center justify-center py-3 rounded-lg cursor-pointer transition-colors ${theme === 'dark' ? 'border-2 border-primary bg-bg-lowest' : 'border border-outline-variant hover:border-primary opacity-70'}`}
             >
               <span className={`text-label-md font-bold ${theme === 'dark' ? 'text-primary' : 'text-on-background'}`}>Noir (Dark)</span>
             </div>
             <div 
               onClick={() => setTheme('light')}
               className={`flex items-center justify-center py-3 rounded-lg cursor-pointer transition-colors ${theme === 'light' ? 'border-2 border-primary bg-bg-lowest' : 'border border-outline-variant hover:border-primary opacity-70'}`}
             >
               <span className={`text-label-md font-bold ${theme === 'light' ? 'text-primary' : 'text-on-background'}`}>Light</span>
             </div>
           </div>
        </div>

      </div>
    </Modal>
  );
};

export default SettingsModal;
