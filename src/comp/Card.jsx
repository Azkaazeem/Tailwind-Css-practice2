import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className='bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-blue-500'>
      <h3 className='text-xl font-bold text-gray-800 mb-2'>{title}</h3>
      <p className='text-gray-600 leading-relaxed'>{description}</p>
    </div>
  );
};

export default Card;