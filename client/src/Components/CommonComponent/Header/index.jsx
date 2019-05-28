import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Header = ({ title, icon }) => {
  return (
    <div className="header">
      {icon}
      <h2>{title}</h2>
      <hr className="line" />
    </div>
  );
};
Header.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
export default Header;