import React from 'react';

const TopHeader = ({ activeTab, onSettingsClick, onTuneClick }) => {
  return (
    <>
      <header className="md:hidden glass-header flex justify-between items-center px-container-padding-mobile py-stack-md w-full sticky top-0 z-50 border-b border-outline-variant">
        <h1 className="text-headline-lg-mobile text-on-background">{activeTab}</h1>
        <div className="flex gap-gutter">
          <button 
            onClick={onSettingsClick}
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button 
            onClick={onTuneClick}
            className="text-on-surface-variant hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
      </header>

      <header className="hidden md:flex bg-background/80 backdrop-blur-xl flex justify-between items-center px-container-padding-desktop py-stack-md w-full sticky top-0 z-40">
        <h1 className="text-display text-on-background tracking-tight">{activeTab}</h1>
        <div className="flex gap-gutter">
          <button 
            onClick={onSettingsClick}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-bg-lowest hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            <span className="material-symbols-outlined">settings</span>
          </button>
          <button 
            onClick={onTuneClick}
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-bg-lowest hover:text-primary transition-colors duration-300 cursor-pointer"
          >
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
      </header>
    </>
  );
};

export default TopHeader;
