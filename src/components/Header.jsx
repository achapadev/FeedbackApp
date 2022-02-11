import React from 'react';
import PropTypes from 'prop-types';

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>Feedback UI</h2>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
};

// Prop types make application a little more robust
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
