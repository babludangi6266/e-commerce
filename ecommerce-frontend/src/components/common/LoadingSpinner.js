import React from 'react';

const LoadingSpinner = ({ size = 'medium' }) => {
  const sizeClass = {
    small: 'loading-spinner-small',
    medium: 'loading-spinner-medium',
    large: 'loading-spinner-large'
  }[size];

  return (
    <div className="flex justify-center items-center">
      <div className={`loading-spinner ${sizeClass}`}></div>
    </div>
  );
};

export default LoadingSpinner;