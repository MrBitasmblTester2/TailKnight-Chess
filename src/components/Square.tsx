// src/components/Square.tsx
import React from 'react';

function Square({ piece, pos }) {
  const [i,j]=pos;
  const isDark=(i+j)%2===1;
  return (
    <div className={`${isDark?'bg-gray-700':'bg-gray-300'} w-12 h-12 flex items-center justify-center`}>{piece}</div>
  );
}

export default Square;