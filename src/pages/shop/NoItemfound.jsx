import React from 'react';

const NoItemFound = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '20px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '18px',
    color: '#888',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>No items found</h2>
      <p style={paragraphStyle}>Sorry, we couldn't find any items matching your search criteria.</p>
    </div>
  );
};

export default NoItemFound;
