import React from 'react';

function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Our Company</h1>
      <p style={styles.paragraph}>We are dedicated to delivering excellence in all our services.</p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
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
  paragraph: {
    fontSize: '16px',
    color: '#666',
  },
};

export default Home;