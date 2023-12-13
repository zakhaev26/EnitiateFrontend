import React from 'react';

const Container = () => {
  return (
    <div style={containerStyle}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

const Card = () => {
  return <div style={cardStyle}>Card Content</div>;
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch', // Adjust as needed
  flexWrap: 'wrap', // Allow cards to wrap to the next row
  padding: '16px', // Adjust as needed
  boxSizing: 'border-box',
};

const cardStyle = {
  flex: '0 0 calc(33.33% - 16px)', // Three cards in one row with some margin
  padding: '16px',
  border: '1px solid #ddd',
  borderRadius: '8px',
  margin: '8px', // Adjust as needed
  boxSizing: 'border-box',
};

export default Container;
