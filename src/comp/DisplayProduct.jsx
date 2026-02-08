import React from 'react';
import Card from './Card.jsx';

const DisplayProduct = ({ products }) => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-gray-800 mb-6'>Product List</h2>
      
      {products.length === 0 ? (
        <p className='text-gray-500 text-lg'>No products added yet. Fill the form to create a card.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Map through the products and use the Card component */}
          {products.map((item, index) => (
            <Card key={index} title={item.title} description={item.description} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DisplayProduct;