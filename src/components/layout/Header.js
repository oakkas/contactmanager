import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-info mb-3 py-1">
      <div className="container">
        <a href="/" className="navbar-brand">
          <i className="fas fa-address-book" /> {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item mr-1">
              <Link to="/" className="nav-link text-white bg-dark">
                <i className="fas fa-home" /> Home
              </Link>
            </li>
            <li className="nav-item mr-1">
              <Link to="/contact-add" className="nav-link text-white bg-dark">
                <i className="fas fa-plus" /> Add
              </Link>
            </li>
            <li className="nav-item mr-1">
              <Link to="/about" className="nav-link text-white bg-dark">
                <i className="fas fa-question" /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propType = {
  branding: PropTypes.string.isRequired
};

export default Header;
