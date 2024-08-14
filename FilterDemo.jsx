//index.js file 
const dropdownContent = [
  { label: "Date of registration" },
  { label: "Vendor Sorce" },
  { label: "Rating" },
  { label: "Status" },
  { label: "Type of business" },
  { label: "location" },
];

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <FilterCompo
        filterBtn="Filter"
        dropdownContent={dropdownContent}
        droupDownTitle="Refine by"
      />
    </StoreContextProvider>
  </BrowserRouter>
);


// FilterDemo.css
import React, { useState } from "react";
import "./Reactintern.css";

const Filter = ({ filterBtn, dropdownContent, droupDownTitle }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelect = (item) => {
    alert(`You Select: ${item.label}`);
    setShowDropdown(false);
  };

  return (
    <div className="filter-container">
      <button onClick={toggleDropdown} className="filter-button">
        {filterBtn}
      </button>
      {showDropdown && (
        <div className="dropdown-menu">
          <div className="droupdown-head">
            <p>{droupDownTitle}</p>
            <button>clear</button>
          </div>
          {dropdownContent.map((item, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => handleSelect(item)}
            >
              {item.label} <i class="bi bi-chevron-right"></i>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
