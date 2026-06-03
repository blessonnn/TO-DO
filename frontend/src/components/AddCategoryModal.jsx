import React, { useState } from 'react';
import Modal from './Modal';

const AddCategoryModal = ({ isOpen, onClose, onAddCategory }) => {
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName.trim()) {
      onAddCategory(categoryName.trim());
      setCategoryName('');
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="New Category">
      <form onSubmit={handleSubmit} className="flex flex-col gap-stack-md">
        <div className="flex flex-col gap-stack-sm">
          <label className="text-label-sm text-on-surface-variant uppercase tracking-wider">Category Name</label>
          <input 
            type="text" 
            autoFocus
            placeholder="e.g. Work, Personal, Groceries"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="bg-bg-lowest border border-outline-variant focus:border-primary rounded-lg p-3 text-body-lg text-on-background outline-none transition-colors"
          />
        </div>
        
        <div className="flex justify-end gap-stack-sm mt-stack-sm">
          <button 
            type="button" 
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-label-md text-on-surface-variant hover:text-on-background transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            disabled={!categoryName.trim()}
            className="px-6 py-2 bg-primary text-[#002a77] rounded-lg text-label-md font-bold disabled:opacity-50 transition-colors cursor-pointer"
          >
            Create
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddCategoryModal;
