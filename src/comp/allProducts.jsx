import React, { useState } from 'react';
import ProductForm from './ProductForm.jsx';
import DisplayProduct from './DisplayProduct.jsx/index.js';

const Product = () => {
  // State to store the list of all added products
  const [allProducts, setAllProducts] = useState([]);

  // Function to add a new product to the list
  const addProduct = (title, description) => {
    const newProduct = { title, description };
    setAllProducts([...allProducts, newProduct]);
  };

  return (
    <div className='flex h-screen bg-gray-100'>
      {/* Left Side: Form */}
      <div className='w-1/3 bg-white shadow-xl z-10'>
        <ProductForm addProduct={addProduct} />
      </div>

      {/* Right Side: Display Area */}
      <div className='w-2/3 p-8 overflow-y-auto'>
        <DisplayProduct products={allProducts} />
      </div>
    </div>
  );
};

export default Product;