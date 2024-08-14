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


// FilterDemo.jsx
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


// Filter.css

.filter-container {
  position: relative;
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.filter-button {
  background-color: tomato;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 4px;
  width: 200px;
}

.dropdown-menu {
  position: absolute;
  top: 50%;
  left: 57%;
  background-color: white;
  border: 1px solid #e7e7e7;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(21, 21, 21, 0.15);
  z-index: 1000;
  width: 200px;
  max-height: 300px;
  overflow-y: auto;
}
.dropdown-menu .droupdown-head{
    margin: 10px;
    display: flex;
    justify-content: space-between;
}

.droupdown-head p{
  font-size: 15px;
  font-weight: 600;
}

.droupdown-head button{
  border: none;
  outline: none;
  background-color: tomato;
  color: white;
  padding: 2px 5px;
  border-radius: 5px;
}

.dropdown-item {
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
}

.dropdown-item:hover {
  background-color: #f0f0f0;
}

