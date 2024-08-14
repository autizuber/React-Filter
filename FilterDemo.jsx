import { useState } from "react";
import "./FilterDemo.css";

export function FilterDemo({ btn, droupDownData }) {
  const [showDropdown, setShowDeopdown] = useState(false);
  function toggleButton() {
    setShowDeopdown(!showDropdown);
  }

  return (
    <div className="container main">
      <button onClick={toggleButton} className="btn btn-primary">
        <i className="bi bi-filter"></i>
        {btn}
      </button>
      {showDropdown && (
        <div className="dropdown">
          <div className="d-flex justify-content-between align-items-center">
            <p className="m-2">Refine by</p>
            <button className="btn btn-link">close</button>
          </div>
          <div className="dropdown-menu">
            {droupDownData.map((item, index) => (
              <div className="dropdoun-item" key={index}>
                <label>{item.lable}</label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
