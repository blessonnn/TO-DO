import React, { useState } from 'react';
import Modal from './Modal';

const TuneModal = ({ isOpen, onClose }) => {
  const [sortBy, setSortBy] = useState('date');
  const [showCompleted, setShowCompleted] = useState(true);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Display Options">
      <div className="flex flex-col gap-stack-md">
        
        {/* Sort Section */}
        <div>
          <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-3">Sort By</p>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-bg-lowest transition-colors cursor-pointer group">
              <div className="w-5 h-5 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors">
                {sortBy === 'date' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
              </div>
              <span className="text-body-md text-on-background">Creation Date</span>
              <input type="radio" name="sort" className="hidden" checked={sortBy === 'date'} onChange={() => setSortBy('date')} />
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-bg-lowest transition-colors cursor-pointer group">
              <div className="w-5 h-5 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors">
                {sortBy === 'priority' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
              </div>
              <span className="text-body-md text-on-background">Priority</span>
              <input type="radio" name="sort" className="hidden" checked={sortBy === 'priority'} onChange={() => setSortBy('priority')} />
            </label>
            <label className="flex items-center gap-3 p-3 rounded-lg hover:bg-bg-lowest transition-colors cursor-pointer group">
              <div className="w-5 h-5 rounded-full border border-outline-variant flex items-center justify-center group-hover:border-primary transition-colors">
                {sortBy === 'alphabetical' && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
              </div>
              <span className="text-body-md text-on-background">Alphabetical</span>
              <input type="radio" name="sort" className="hidden" checked={sortBy === 'alphabetical'} onChange={() => setSortBy('alphabetical')} />
            </label>
          </div>
        </div>

        {/* View Section */}
        <div className="pt-4 border-t border-outline-variant">
           <p className="text-label-sm text-on-surface-variant uppercase tracking-wider mb-3">Visibility</p>
           <label className="flex justify-between items-center p-3 rounded-lg hover:bg-bg-lowest transition-colors cursor-pointer">
            <div>
              <p className="text-body-md text-on-background">Show Completed Tasks</p>
            </div>
            <div className={`w-11 h-6 rounded-full flex items-center px-1 transition-colors ${showCompleted ? 'bg-primary' : 'bg-outline-variant'}`} onClick={() => setShowCompleted(!showCompleted)}>
              <div className={`w-4 h-4 rounded-full transition-transform ${showCompleted ? 'translate-x-5 bg-[#002a77]' : 'bg-on-background'}`}></div>
            </div>
          </label>
        </div>

      </div>
    </Modal>
  );
};

export default TuneModal;
