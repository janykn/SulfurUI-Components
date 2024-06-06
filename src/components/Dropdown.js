import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button onClick={() => setIsOpen(!isOpen)}>Open Dropdown</button>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li key={index} onClick={option.onClick}>
              {option.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default Dropdown;
