import React, { useState } from 'react';

const ProductForm = ({ addProduct }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return; // Prevent empty cards
    
    // Send data to parent
    addProduct(title, description);
    
    // Clear the form
    setTitle("");
    setDescription("");
  };

  return (
    <div className='p-6 flex flex-col justify-center h-full'>
      <h2 className='text-2xl font-bold mb-6 text-blue-600'>Add New Product</h2>
      
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Product Title</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter title..."
          />
        </div>

        <div>
          <label className='block text-sm font-medium text-gray-700 mb-1'>Description</label>
          <textarea 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
            placeholder="Enter details..."
            rows="4"
          />
        </div>

        <button 
          type="submit" 
          className='bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 mt-2'
        >
          Add Card
        </button>
      </form>
    </div>
  );
};

export default ProductForm;