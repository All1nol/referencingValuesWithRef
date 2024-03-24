import React, { useState, useRef } from 'react';

const CustomSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const options = ["Home", "About Us", "Contact Us"];
  const selectRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };


  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={selectRef}>
      <div onClick={toggleDropdown}>
        {selectedValue || 'Select'}
      </div>
      {isOpen && (
        <div>
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
