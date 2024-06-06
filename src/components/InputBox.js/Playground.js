import React, { useState } from 'react';
import InputBox from './components/InputBox.js/InputBox';

const Playground = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  // Define custom styles
  const customStyles = {
      color: 'black',
      backgroundColor: 'black',
      inputColor: 'white',
      InputfontFamily: 'Inter',
      placeholderColor: 'grey'
  };

  return (
    <div>
      <h2>Custom Input Box</h2>
      <InputBox
        placeholder="Enter text"
        value={inputValue}
        onChange={handleChange}
        styles={customStyles} // Pass custom styles as a prop
      />
    </div>
  );
};

export default Playground;
