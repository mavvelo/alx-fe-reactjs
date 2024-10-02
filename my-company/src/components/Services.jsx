import React from 'react';

function Services() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Services</h1>
      <ul style={styles.list}>
        <li>Technology Consulting</li>
        <li>Market Analysis</li>
        <li>Product Development</li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#333',
  },
  list: {
    listStyleType: 'disc', // Use disc markers for a more common list style
    paddingLeft: '20px', // Indent the list items for better readability
    fontSize: '16px',
    color: '#666',
  },
};

export default Services;