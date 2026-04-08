import React from 'react'

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2026 My Portfolio App. All rights reserved.</p>
    </footer>
  )
}

// Inline styles for simplicity
const styles = {
  footer: {
    backgroundColor: '#ef7809ff',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
  },
  
};

export default Footer