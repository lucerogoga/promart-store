import React from "react";
import "./ButtonFilter.css";

export function ButtonFilter(props) {
  const { item, icon, onClick, active } = props;

  return (
    <>
      <button
        className={"button-card " + (active ? "active" : "")}
        onClick={onClick}
      >
        {/* render icons to props */}
        <div className={"button-card--content"}>
          <div className={"button-card--icon-container"}>{icon}</div>
          <div className={"button-card--text-content"}>
            {/* render the item name to props */}
            <h3 className="button-card--title">{item}</h3>
          </div>
        </div>
      </button>
    </>
  );
}

export default ButtonFilter;
